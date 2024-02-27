import { sequence } from '@sveltejs/kit/hooks';
import { supabase } from '$lib/hooks/supabase';
import { authGuard } from '$lib/hooks/auth-guard';

export const handle = sequence(supabase, authGuard);
