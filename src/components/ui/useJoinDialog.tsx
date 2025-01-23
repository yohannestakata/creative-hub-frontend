'use client';

import { useCallback, useEffect, useRef } from 'react';

import Image from 'next/image';

const useJoinDialog = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const showDialog = useCallback(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);

  const hideDialog = useCallback(() => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog.addEventListener('click', e => {
      if (!dialogRef.current) return;

      const dialogDimensions = dialog.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        dialogRef.current.close();
      }
    });

    return () => dialog.removeEventListener('click', () => {});
  });

  const Dialog = () => (
    <dialog
      ref={dialogRef}
      className="w-10/12 rounded-2xl backdrop:bg-foreground/40 backdrop:backdrop-blur-sm"
    >
      <div className="grid grid-cols-12 gap-6 p-6">
        <div className="relative col-span-6 aspect-square overflow-hidden rounded-2xl bg-muted">
          <Image
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="People working at Creative Hub Ethiopia"
            fill
          />
        </div>
        <div className="col-span-6">
          <h2 className="font-display text-2xl font-medium uppercase leading-none tracking-tighter">
            Join the creative community
          </h2>
          <form className="mt-4">
            <div className="flex gap-3">
              <label className="flex flex-1 flex-col gap-1">
                <span>Name</span>
                <input
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-border px-4 py-2 focus:border-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                />
              </label>
              <label className="flex flex-1 flex-col gap-1">
                <span>Email</span>
                <input
                  required
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-border px-4 py-2 focus:border-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                />
              </label>
            </div>
            <label className="mt-3 flex flex-col gap-1">
              <span>Interests</span>
              <textarea
                placeholder="Let us know what you're passionate about"
                className="w-full rounded-lg border border-border px-4 py-2 focus:border-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                rows={3}
              />
            </label>
            <div className="mt-3 flex justify-end gap-2">
              <button
                onClick={hideDialog}
                className="rounded-full bg-muted px-6 py-2"
              >
                Close
              </button>
              <button
                type="submit"
                className="rounded-full bg-primary px-6 py-2"
              >
                Join now
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );

  return { Dialog, showDialog, hideDialog };
};

export default useJoinDialog;
