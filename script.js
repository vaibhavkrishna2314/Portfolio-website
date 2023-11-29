document.addEventListener('DOMContentLoaded', function () {
    const downloadResumeButton = document.getElementById('downloadResumeButton');

    downloadResumeButton.addEventListener('click', function () {
        // Replace 'path-to-your-resume.pdf' with the actual path to your PDF file.
        const pdfFile = 'cv srijan social internship vaibhav krishna.pdf';

        // Open the PDF file in a new tab or window.
        window.open(pdfFile, '_blank');
    });
});