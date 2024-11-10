
function editText(event: Event): void {
    const target = event.target as HTMLElement;


    if (target.contentEditable === 'false' || target.contentEditable === '') {
        target.contentEditable = 'true';
        target.style.backgroundColor = '#f0f0f0';
        target.focus();
    } else {
        target.contentEditable = 'false';
        target.style.backgroundColor = '';
    }
}

document.getElementById('save-resume')?.addEventListener('click', () => {
    const name = (document.getElementById('name-output') as HTMLElement).innerText;
    const email = (document.getElementById('email-output') as HTMLElement).innerText;
    const phone = (document.getElementById('phone-output') as HTMLElement).innerText;
    const gender = (document.getElementById('gender-output') as HTMLElement).innerText;
    const education = (document.getElementById('education-output') as HTMLElement).innerText;
    const experience = (document.getElementById('experience-output') as HTMLElement).innerText;
    const skills = (document.getElementById('skills-output') as HTMLElement).innerText;

    const resumeOutput = document.getElementById('resume-output') as HTMLElement;

    resumeOutput.innerHTML = `
        <h2>Generated Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Skills:</strong> ${skills}</p>
    `;
});
