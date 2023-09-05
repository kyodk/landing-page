import elements from './elements';

const { questions } = elements;

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling; // '.faq__answer'を取得

    if (question.classList.contains('is-active')) {
      question.classList.remove('is-active');
      answer.classList.remove('is-open');
    } else {
      question.classList.add('is-active');
      answer.classList.add('is-open');
    }
  });
});
