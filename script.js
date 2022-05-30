const themeSelector = () =>{
    const selectTheme = document.getElementById("selectTheme");
    const themeProvider = document.getElementById("themeProvider");

    const activeTheme = (theme) =>{
        themeProvider.setAttribute("href", `./themes/${theme}.css`)
    }

    selectTheme.addEventListener("change", () =>{
        activeTheme(selectTheme.value)
    })
}

themeSelector();

const teamMembers = [
  {
    name: "Lisa",
    role: "CEO, CO-Founder, Developer, Designer",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    avatar: "./img/lisa-avatar.jpg",
    img: "./img/html.jpg",
  },
  {
    name: "Karwan",
    role: "CO-Founder and Developer",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    avatar: "./img/karwan-avatar.jpg",
    img: "./img/css.jpg",
  },
  {
    name: "Patrick",
    role: "Junior Developer",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    avatar: "./img/karwan-avatar.jpg",
    img: "./img/css.jpg",
  }
];

teamMembers.map((member) => {
  const tmArticle = document.createElement("article");
  const tmHeader = document.createElement("div");

  tmHeader.classList.add("article-header");

  const tmAvatar = document.createElement("img");
  const tmName = document.createElement("h3");
  const tmImage = document.createElement("img");
  const tmRole = document.createElement("h4");
  const tmAbout = document.createElement("p");
  const tmReadMOre = document.createElement("a");

  tmAvatar.src = member.avatar;
  tmName.innerHTML = member.name;
  tmImage.src = member.img;
  tmRole.innerHTML = member.role;
  tmAbout.innerHTML = member.about;
  tmReadMOre.href = "#";
  tmReadMOre.innerHTML = "Read more...";

  tmArticle.append(tmHeader);
  tmHeader.append(tmAvatar);
  tmHeader.append(tmName);
  tmArticle.append(tmImage);
  tmArticle.append(tmRole);
  tmArticle.append(tmAbout);
  tmArticle.append(tmReadMOre);

  document.getElementById("team-members-articles").append(tmArticle);
});


let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

const handleSubmit = () =>{
  console.log(name.value, email.value, subject.value, message.value)
}