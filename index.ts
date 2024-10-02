interface Respon {
    id: number, 
    category?: {
        id: number,
        name: string
    }
    name: string,
    photoUrls?: string[],
    tags?: Array<{
        
        id: number,
        name: string
    }>,
    status: string
}

 async function Req() {
   const url = 'https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available';
  try {
    const response = await fetch(url);
    const data: Respon[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}


Req().then((data) => {
    console.log('Полученные данные:', data);
});