addEventListener("DOMContentLoaded", () => {
  let data = [
    {
      id: "uiux",
      name: "Rent instant",
      category: "UIUX",
      description:
        "Description dfudns dndskjnvd sklnc dsknvdsklnvkaslnv adsjk ewfewfewfw",
      link:"https://www.rentinstant.ca/"
    },
    {
      id: "uiux",
      name: "Way to startup",
      category: "UIUX",
      description:
        "Description dfudns dndskjnvd sklnc dsknvdsklnvkaslnv adsjk ewfewfewfw",
      link:"https://www.instagram.com/way2startup.in?igsh=eHRhbWJvdWliamo1"
    },
    // {
    //   id: "uiux",
    //   name: "Project3",
    //   category: "Category",
    //   description:
    //     "Description dfudns dndskjnvd sklnc dsknvdsklnvkaslnv adsjk ewfewfewfw",
    // },
    {
      id: "app",
      name: "Prompt GPT",
      category: "APP",
      description:
        "Prompt GPT:A 3-tier app for enhancing Al prompts,from beginner to expert levels.",
        link:"https://play.google.com/store/apps/details?id=com.vinaylakkoju.flutter_gemini"
    },
    {
      id: "app",
      name: "Check My Resume",
      category: "APP",
      description:
        "Boost your resume with Check My Resume Analyze & improve your Resume now.",
        link:"https://play.google.com/store/apps/details?id=com.vinaylakkoju.resume_analyzer"
    },
    {
      id: "app",
      name: "Reaidy.io",
      category: "APP",
      description:
        "The future of interviews is here!",
        link:"https://play.google.com/store/apps/details?id=com.spotmies.reaidy"
    },
    {
      id: "web",
      name: "TDR Coaching center",
      category: "WEB",
      description:
        "A coaching center website used for maintain the data of students",
        link:"h#"
    },
    {
      id: "web",
      name: "Developers.Gen",
      category: "WEB",
      description:
        "Description dfudns dndskjnvd sklnc dsknvdsklnvkaslnv adsjk ewfewfewfw",
        link:"#"
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
            <a href="${data1.link}" target="_blank">Go here</a>
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
