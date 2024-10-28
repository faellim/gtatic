js const request = async () => {
    const reqResult = await fetch("https://hltv-api.vercel.app/api/news.json");
    const result = await reqResult.json();
    console.log(result);
  };
  
  request();