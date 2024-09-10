
    document.getElementById("contactForm").addEventListener("submit", function(event){
        event.preventDefault(); // Prevent the default form submission
        
        // Clear all input fields
        this.reset();

        // Optionally, submit the form after clearing
        this.submit();
    });

    function setProgress(elementId, percentage) {
        const progressCircle = document.getElementById(elementId);
        const progressText = progressCircle.querySelector('span');
        
        const angle = (percentage / 100) * 360;
        progressCircle.style.background = `conic-gradient(#4d5bf9 ${angle}deg, #cfd9df ${angle}deg)`;
        progressText.textContent = `${percentage}%`;
    }
    
   
    setProgress('html-progress', 90);
    setProgress('css-progress', 85);
    setProgress('js-progress', 75);
    setProgress('react-progress', 50);
    setProgress('java-progress', 60);
    setProgress('sql-progress', 65);
    setProgress('c-progress', 70);
    let introduceHeading = document.querySelectorAll(".introduce-heading");
    let image= document.querySelectorAll(".image");
    let btnAnimate= document.querySelectorAll(".btn-animate");
    let image1= document.querySelectorAll(".image1");
    let image2= document.querySelectorAll(".image2");
    let image3= document.querySelectorAll(".image3");
    let image4= document.querySelectorAll(".image4");
    let proficient= document.querySelectorAll(".proficient");
    let proficientButton= document.querySelectorAll(".proficiency-button");
    let html= document.querySelectorAll("#html-progress");
    let css= document.querySelectorAll("#css-progress");
    let js= document.querySelectorAll("#js-progress");
    let sql= document.querySelectorAll("#sql-progress");
    let react= document.querySelectorAll("#react-progress");
    let java= document.querySelectorAll("#java-progress");
    let c= document.querySelectorAll("#c-progress");
    let EducationContainer= document.querySelectorAll("#education-container");
    let EducationContainer1= document.querySelectorAll("#education-container1");
    let EducationContainer2= document.querySelectorAll("#education-container2");
    let project1= document.querySelectorAll("#project1");
    let project2= document.querySelectorAll("#project2");
    let project3= document.querySelectorAll("#project3");
    let project4= document.querySelectorAll("#project4");
    let project5= document.querySelectorAll("#project5");
    let project6= document.querySelectorAll("#project6");
    
    
    const sr = ScrollReveal({
      origin: "top",
      distance: "70px",
      duration: 2000,
      reset: true,
    });
  
    
    // sr.reveal(contactPage, { delay: 200 });
    
    sr.reveal(introduceHeading,{ origin: "right", delay: 300 });
    sr.reveal(btnAnimate,{ origin: "left", delay: 200 });
    sr.reveal(proficientButton, { origin: "left", delay: 200 });
    sr.reveal(html);
    sr.reveal(css,{ origin: "bottom", delay: 50 });
    sr.reveal(js,{ delay: 100 });
    sr.reveal(react,{ origin: "bottom",delay: 150 });
    sr.reveal(java,{ delay: 200 });
    sr.reveal(sql,{origin: "bottom", delay: 250 });
    sr.reveal(c,{ delay: 300 });
    sr.reveal(proficient);
    sr.reveal(image,{delay:400});
    sr.reveal(image1);
    sr.reveal(image2,{delay:100});
    sr.reveal(image3,{delay:250});
    sr.reveal(image4,{delay:350});
    sr.reveal(EducationContainer, { origin: "left", delay: 200 });
    sr.reveal(EducationContainer2, { origin: "right", delay: 200 });
    sr.reveal(EducationContainer1, { origin: "top", delay: 200 });
    sr.reveal(project1, { origin: "top", delay: 200 });
    sr.reveal(project2, { origin: "left", delay: 200 });
    sr.reveal(project3, { origin: "right", delay: 200 });
    sr.reveal(project4, { origin: "bottom", delay: 200 });
    sr.reveal(project5, { origin: "top", delay: 200 });
    sr.reveal(project6, { origin: "bottom", delay: 200 });
  
 