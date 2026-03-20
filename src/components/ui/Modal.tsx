"use client"

import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
};

export default function Modal({ open, onClose, title, children, className }: ModalProps) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title ?? "Modal dialog"}
    >
      <div
        className={`relative w-full max-w-2xl ${className ?? ""}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="glass rounded-3xl border-white/10 shadow-xl">
          <div className="flex items-start justify-between gap-4 p-6">
            <div>
              <h2 className="text-xl font-bold text-white">{title}</h2>
              <p className="mt-1 text-sm text-slate-200/70">
                Send a message so we can start planning the next project.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-2 text-slate-200 transition hover:bg-white/10"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="px-6 pb-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
