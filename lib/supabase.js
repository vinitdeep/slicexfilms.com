import { createClient } from '@supabase/supabase-js';

// SliceX shares the "V Media Production" Supabase project; all SliceX tables
// are prefixed slicex_ and the media bucket is "slicex". These are public
// (publishable) credentials — row-level security does the real gating.
export const SUPABASE_URL = 'https://kfylqdysvptnxfbklcru.supabase.co';
export const SUPABASE_KEY = 'sb_publishable_HjmZLr81eUE81R6JJ4GrRQ_--d0r7Jx';

let client = null;
export function getSupabase() {
  if (typeof window === 'undefined') return null; // static export: browser only
  if (!client) {
    client = createClient(SUPABASE_URL, SUPABASE_KEY, {
      auth: { persistSession: true, autoRefreshToken: true, storageKey: 'slicex-admin-auth' },
    });
  }
  return client;
}

export const MEDIA_BUCKET = 'slicex';
export const mediaUrl = (path) => `${SUPABASE_URL}/storage/v1/object/public/${MEDIA_BUCKET}/${path}`;
