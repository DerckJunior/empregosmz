document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('job-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const company = document.getElementById('company').value;
        const location = document.getElementById('location').value;
        const description = document.getElementById('description').value;
        const requirements = document.getElementById('requirements').value;

        const job = { title, company, location, description, requirements };

        // Armazenar a vaga no localStorage
        let jobs = JSON.parse(localStorage.getItem('jobs')) || [];
        jobs.push(job);
        localStorage.setItem('jobs', JSON.stringify(jobs));

        alert('Vaga publicada com sucesso!');
        form.reset();
    });
});
