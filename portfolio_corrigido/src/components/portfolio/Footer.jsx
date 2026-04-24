import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-950 py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-400 text-sm">
                        © {new Date().getFullYear()} Nicoli Felipe. Todos os direitos reservados.
                    </p>
                    <p className="text-slate-400 text-sm flex items-center gap-1">
                        Feito com <Heart className="w-4 h-4 text-orange-500 fill-orange-500" /> em São Paulo
                    </p>
                </div>
            </div>
        </footer>
    );
}