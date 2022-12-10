import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://harhefzrwpeansposguu.supabase.co/rest/v1/',
    headers: {
       apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhcmhlZnpyd3BlYW5zcG9zZ3V1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3MDYyNjcyOSwiZXhwIjoxOTg2MjAyNzI5fQ.IPIiiVFeDG2MNj4XClvmMYT-XByHGtJFxxUMRTirxKY",
       Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhcmhlZnpyd3BlYW5zcG9zZ3V1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3MDYyNjcyOSwiZXhwIjoxOTg2MjAyNzI5fQ.IPIiiVFeDG2MNj4XClvmMYT-XByHGtJFxxUMRTirxKY"
    }
})