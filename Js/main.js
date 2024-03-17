"use strict";

const faqCloseIcon = document.querySelectorAll(".faq-close-icon");
const faqOpenIcon = document.querySelectorAll(".faq-open-icon");
const faqModal = document.querySelectorAll(".faq-modal");

faqOpenIcon.forEach((open, index) => {
  open.addEventListener("click", function () {
    // Hide all the modal by default

    const currentFaqModal = faqModal[index];

    // const isOpen = !currentFaqModal.classList.contains("hidden");
    const isOpen = !currentFaqModal.classList.contains("hidden");

    //  const isOpen = !currentDropDown.classList.contains("hidden");

    faqModal.forEach((faqmodal) => {
      faqmodal.classList.add("hidden");
    });

    // Toggle betwwen hiding and showing the open and close icon
    faqOpenIcon[index].classList.add("hidden");
    faqCloseIcon[index].classList.remove("hidden");

    // Display the corresponding modal

    if (!isOpen) {
      currentFaqModal.classList.remove("hidden");
    }
  });

  // Implementing the close faqmodal

  faqCloseIcon.forEach((close) => {
    close.addEventListener("click", function () {
      // close the modal
      faqModal[index].classList.add("hidden");

      // Hide the close btn and show the opon btn
      faqOpenIcon[index].classList.remove("hidden");
      faqCloseIcon[index].classList.add("hidden");
    });
  });
});
