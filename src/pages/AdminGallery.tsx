import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "admin_gallery_images";

type ImageItem = { id: string; name: string; dataUrl: string };

const AdminGallery = () => {
  const [items, setItems] = useState<ImageItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch (e) {
      setItems([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const handleFiles = async (files: FileList | null) => {
    if (!files) return;
    const next: ImageItem[] = [];
    for (const f of Array.from(files)) {
      const dataUrl = await toDataUrl(f);
      next.push({ id: crypto.randomUUID(), name: f.name, dataUrl });
    }
    setItems((s) => [...next, ...s]);
  };

  const removeItem = (id: string) => setItems((s) => s.filter((i) => i.id !== id));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Gallery Admin</h1>
        <Link to="/" className="text-sm text-muted-foreground hover:underline">Back to site</Link>
      </div>

      <div className="mb-6">
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleFiles(e.target.files)}
            className="hidden"
          />
          <span className="px-4 py-2 bg-primary text-white rounded">Upload Images</span>
        </label>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.length === 0 && (
          <div className="col-span-full text-sm text-muted-foreground">No images yet. Upload to begin.</div>
        )}

        {items.map((it) => (
          <div key={it.id} className="bg-card border border-border rounded overflow-hidden p-2">
            <div className="aspect-[4/3] w-full overflow-hidden rounded">
              <img src={it.dataUrl} alt={it.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="text-xs text-foreground/80 truncate">{it.name}</div>
              <button onClick={() => removeItem(it.id)} className="text-sm text-red-500">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

async function toDataUrl(file: File) {
  return await new Promise<string>((res, rej) => {
    const r = new FileReader();
    r.onerror = () => rej(new Error("file read error"));
    r.onload = () => res(String(r.result));
    r.readAsDataURL(file);
  });
}

export default AdminGallery;
