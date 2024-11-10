var _a;
function editText(event) {
    var target = event.target;
    if (target.contentEditable === 'false' || target.contentEditable === '') {
        target.contentEditable = 'true';
        target.style.backgroundColor = '#f0f0f0';
        target.focus();
    }
    else {
        target.contentEditable = 'false';
        target.style.backgroundColor = '';
    }
}
(_a = document.getElementById('save-resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var name = document.getElementById('name-output').innerText;
    var email = document.getElementById('email-output').innerText;
    var phone = document.getElementById('phone-output').innerText;
    var gender = document.getElementById('gender-output').innerText;
    var education = document.getElementById('education-output').innerText;
    var experience = document.getElementById('experience-output').innerText;
    var skills = document.getElementById('skills-output').innerText;
    var resumeOutput = document.getElementById('resume-output');
    resumeOutput.innerHTML = "\n        <h2>Generated Resume</h2>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Gender:</strong> ").concat(gender, "</p>\n        <p><strong>Education:</strong> ").concat(education, "</p>\n        <p><strong>Experience:</strong> ").concat(experience, "</p>\n        <p><strong>Skills:</strong> ").concat(skills, "</p>\n    ");
});
