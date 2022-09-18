if (typeof window !== "undefined") {
  window.printResume = () => {
    document.querySelector("#root > button").remove();
    document.querySelector("main > article > a").remove();
    document.querySelector("#root > nav").remove();
    document.querySelector("div.update-date").remove();

    document.querySelectorAll("main > article")[3].style.paddingTop = "120px";
    document.querySelectorAll("main > article")[4].style.paddingTop = "60px";
    document.querySelectorAll("main > article")[5].style.paddingTop = "80px";
    document.querySelectorAll("main > article")[6].style.paddingTop = "100px";

    document.querySelector("main").style.padding = "40px 40px 100px 40px";

    const printContents = document.getElementById("root").innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    document.body.style.width = "854px";
    window.print();

    document.body.innerHTML = originalContents;
  };
}
