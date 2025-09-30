import { readdir } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    const galleryPath = join(process.cwd(), 'public', 'gallery');
    const files = await readdir(galleryPath);
    
    // Sadece resim dosyalarını filtrele
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );
    
    // Sayılarına göre sırala (büyükten küçüğe - sondan başa)
    const sortedFiles = imageFiles.sort((a, b) => {
      const getNumber = (filename) => {
        const match = filename.match(/(\d+)/);
        return match ? parseInt(match[1]) : 0;
      };
      
      const numA = getNumber(a);
      const numB = getNumber(b);
      
      // Büyükten küçüğe sırala
      return numB - numA;
    });
    
    const images = sortedFiles.map((filename, index) => ({
      src: `/gallery/${filename}`,
      w: 1600,
      h: 1200,
      tag: "fleet",
      id: index,
      filename: filename
    }));
    
    return Response.json(images);
  } catch (error) {
    console.error('Galeri resimleri yüklenirken hata:', error);
    return Response.json([], { status: 500 });
  }
}
