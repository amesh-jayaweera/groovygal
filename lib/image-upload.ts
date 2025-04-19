import { put } from "@vercel/blob"
import { nanoid } from "nanoid"

export async function uploadImage(file: File) {
  try {
    const filename = `${nanoid()}-${file.name}`
    const blob = await put(filename, file, {
      access: "public",
    })

    return {
      url: blob.url,
      success: true,
    }
  } catch (error) {
    console.error("Error uploading image:", error)
    return {
      url: null,
      success: false,
    }
  }
}
