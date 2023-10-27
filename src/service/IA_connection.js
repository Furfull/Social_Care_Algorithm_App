export default async function NotificationEndpoint(){ 
    return await fetch('https://f1df-2804-14d-5c42-8652-4ce5-5e4-1603-e9a8.ngrok-free.app/feed/analyse-facebook/')
    .then((response) => response.json()); }

