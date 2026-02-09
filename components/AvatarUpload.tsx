
'use client'

import { useState, useRef } from 'react'
import { createClient } from '@/lib/supabase/client' // Adjust if client import is different
import { User, Camera, Loader2 } from 'lucide-react'
import Image from 'next/image'

interface AvatarUploadProps {
    uid: string
    url: string | null
    size?: number
    onUpload: (url: string) => void
}

export default function AvatarUpload({ uid, url, size = 150, onUpload }: AvatarUploadProps) {
    const supabase = createClient()
    const [avatarUrl, setAvatarUrl] = useState<string | null>(url)
    const [uploading, setUploading] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setUploading(true)

            if (!event.target.files || event.target.files.length === 0) {
                throw new Error('You must select an image to upload.')
            }

            const file = event.target.files[0]
            const fileExt = file.name.split('.').pop()
            const fileName = `${uid}-${Math.random()}.${fileExt}`
            const filePath = `${fileName}`

            const { error: uploadError } = await supabase.storage
                .from('avatars')
                .upload(filePath, file)

            if (uploadError) {
                throw uploadError
            }

            const { data: { publicUrl } } = supabase.storage
                .from('avatars')
                .getPublicUrl(filePath)

            setAvatarUrl(publicUrl)
            onUpload(publicUrl)

        } catch (error) {
            console.error('Error uploading avatar:', error)
            alert('Error uploading avatar!')
        } finally {
            setUploading(false)
        }
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <div
                className="relative rounded-full overflow-hidden border-2 border-primary bg-secondary group cursor-pointer"
                style={{ width: size, height: size }}
                onClick={() => fileInputRef.current?.click()}
            >
                {avatarUrl ? (
                    <Image
                        src={avatarUrl}
                        alt="Avatar"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-opacity group-hover:opacity-75"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-secondary text-primary">
                        <User size={size * 0.4} />
                    </div>
                )}

                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    {uploading ? (
                        <Loader2 className="w-8 h-8 text-white animate-spin" />
                    ) : (
                        <Camera className="w-8 h-8 text-white" />
                    )}
                </div>
            </div>

            <input
                type="file"
                id="single"
                accept="image/*"
                onChange={handleUpload}
                disabled={uploading}
                className="hidden"
                ref={fileInputRef}
            />

            <p className="text-xs text-muted-foreground">
                Click to update profile photo
            </p>
        </div>
    )
}
