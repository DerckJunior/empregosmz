document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Detalhes da vaga em breve!');
        });
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const jobList = document.getElementById('job-list');

    function displayJobs() {
        let jobs = JSON.parse(localStorage.getItem('jobs')) || [];
        jobList.innerHTML = jobs.map(job => `
            <div class="job-item">
                <h4>${job.title}</h4>
                <p>Empresa: ${job.company}</p>
                <p>Localização: ${job.location}</p>
                <p>${job.description}</p>
            </div>
        `).join('');
    }

    displayJobs();
});
