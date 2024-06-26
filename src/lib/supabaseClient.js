import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xyguzxykmfudtpxrwdqz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5Z3V6eHlrbWZ1ZHRweHJ3ZHF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0MDY5MzMsImV4cCI6MjAzNDk4MjkzM30.J07fP9X7WMWnJUqcYJHM2mmIAKHrZTYJgEIj1wVm3Vs';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
