addEventListener("DOMContentLoaded", () => {
  let data = [
    {
      id: "uiux",
      name: "Project1",
      category: "Category",
      description:
        "Description dfudns dndskjnvd sklnc dsknvdsklnvkaslnv adsjk ewfewfewfw",
    },
    {
      id: "uiux",
      name: "Project2",
      category: "Category",
      description:
        "Description dfudns dndskjnvd sklnc dsknvdsklnvkaslnv adsjk ewfewfewfw",
    },
    {
      id: "uiux",
      name: "Project3",
      category: "Category",
      description:
        "Description dfudns dndskjnvd sklnc dsknvdsklnvkaslnv adsjk ewfewfewfw",
    },
    {
      id: "app",
      name: "Project4",
      category: "Category",
      description:
        "Description dfudns dndskjnvd sklnc dsknvdsklnvkaslnv adsjk ewfewfewfw",
    },
    {
      id: "app",
      name: "Project5",
      category: "Category",
      description:
        "Description dfudns dndskjnvd sklnc dsknvdsklnvkaslnv adsjk ewfewfewfw",
    },
    {
      id: "app",
      name: "Project6",
      category: "Category",
      description:
        "Description dfudns dndskjnvd sklnc dsknvdsklnvkaslnv adsjk ewfewfewfw",
    },
    {
      id: "web",
      name: "Project7",
      category: "Category",
      description:
        "Description dfudns dndskjnvd sklnc dsknvdsklnvkaslnv adsjk ewfewfewfw",
    },
    {
      id: "web",
      name: "Project8",
      category: "Category",
      description:
        "Description dfudns dndskjnvd sklnc dsknvdsklnvkaslnv adsjk ewfewfewfw",
    },
  ];

  let div = document.querySelector(".works");
  
  const projects = (data) => {
    div.innerHTML = "";
    let htmlContent = "";
    data.forEach((data1) => {
      console.log("Hi");
      htmlContent += `
        <div class="project-details">
            <h5>${data1.name}</h5>
            <p>${data1.category}</p>
            <p>${data1.description}</p>
            <a href="https://chatgpt.com/">Go here</a>
        </div>
        `;
    });
    div.innerHTML += htmlContent;
  };
  projects(data);
  let all = document.querySelector(".all");
  let uiux = document.querySelector(".uiux");
  let app = document.querySelector(".app");
  let web = document.querySelector(".web");
  all.addEventListener("click",() => {
    projects(data);
  });
  uiux.addEventListener("click",() => {
    let filter1 = data.filter((data) => data.id === 'uiux');
    projects(filter1);
  });
  app.addEventListener("click",() => {
    let filter2 = data.filter((data) => data.id === 'app');
    projects(filter2);
  });
  web.addEventListener("click",() => {
    let filter3 = data.filter((data) => data.id === 'web');
    projects(filter3);
  });
});
