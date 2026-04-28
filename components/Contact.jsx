import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSending(true);

  
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID, 
      process.env.NEXT_PUBLIC_TEMPLATE_ID,  
      form.current,
      process.env.NEXT_PUBLIC_PUBLIC_KEY 
    )
    .then(() => {
      alert("Message envoyé avec succès !");
      form.current?.reset();
    })
    .catch((error) => {
      console.error("Erreur EmailJS:", error);
      alert("Une erreur est survenue.");
    })
    .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="min-h-screen py-32 px-6 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Entrer en contact</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Une idée de projet ou une question ? N'hésitez pas à m'envoyer un message !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <form 
            ref={form} 
            onSubmit={sendEmail} 
            className="glass p-8 rounded-3xl flex flex-col gap-6 relative overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-cyan-400 ml-1">Nom complet</label>
                <input 
                  type="text" 
                  name="name" // À adapter selon ton template EmailJS
                  placeholder="Saliou Sall" 
                  required 
                  className="bg-white/5 border border-white/10 p-3 rounded-xl focus:border-cyan-400 outline-none transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-cyan-400 ml-1">Votre Email</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="exemple@mail.com" 
                  required 
                  className="bg-white/5 border border-white/10 p-3 rounded-xl focus:border-cyan-400 outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-cyan-400 ml-1">Message</label>
              <textarea 
                name="message" 
                placeholder="Expliquez-moi votre projet..." 
                required 
                className="bg-white/5 border border-white/10 p-3 rounded-xl h-40 focus:border-cyan-400 outline-none transition-all resize-none"
              />
            </div>

            <button 
              type="submit" 
              disabled={isSending}
              className="w-full py-4 bg-cyan-500/20 border border-cyan-500/50 rounded-xl hover:bg-cyan-500/30 neon-glow transition-all font-bold flex items-center justify-center gap-2 group"
            >
              {isSending ? (
                "Envoi en cours..."
              ) : (
                <>
                  Envoyer le message
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </>
              )}
            </button>
          </form>

             <div className="grid grid-cols-2 gap-4">
            <a href="mailto:salljunior439@gmail.com" className="glass p-6 rounded-2xl card-hover group text-center">
              <svg className="w-8 h-8 mx-auto mb-4 text-cyan-400 group-hover:text-glow transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium">Email</span>
            </a>
            
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="glass p-6 rounded-2xl card-hover group text-center">
              <svg className="w-8 h-8 mx-auto mb-4 text-cyan-400 group-hover:text-glow transition-all" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>

            <a href="https://github.com/Sall439" target="_blank" rel="noopener noreferrer" className="glass p-6 rounded-2xl card-hover group text-center">
              <svg className="w-8 h-8 mx-auto mb-4 text-cyan-400 group-hover:text-glow transition-all" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-sm font-medium">GitHub</span>
            </a>

            <a href="https://wa.me/765240816" target="_blank" rel="noopener noreferrer" className="glass p-6 rounded-2xl card-hover group text-center">
              <svg className="w-8 h-8 mx-auto mb-4 text-cyan-400 group-hover:text-glow transition-all" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.186 9.186 0 01-1.435-4.909l-.067-.31-.974 4.017-.03-.423a9.564 9.564 0 011.064-4.035l.255-.249a7.2 7.2 0 014.013-1.395l.274-.054-.01 3.953 2.743 2.527-.426.434a6.67 6.67 0 01-3.788 1.583l-.289.042m3.076 5.353h3.16v-12.337h-3.16V9.402c0-1.073-.387-1.807-1.36-1.807-.972 0-1.555.634-1.555 1.805v3.293h-3.16V9.402c0-1.073-.387-1.807-1.36-1.807-.973 0-1.555.634-1.555 1.805v6.438z"/>
              </svg>
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}