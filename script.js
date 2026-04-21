function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
    document.getElementById('menu-' + id).classList.add('active');
}

function toggleDetails(type) {
    document.getElementById('dynamic-details').classList.add('show');
    const text = document.getElementById('basis-text');

    document.getElementById('card-normal').style.borderColor = "var(--border)";
    document.getElementById('card-urgent').style.borderColor = "var(--border)";
    document.getElementById('card-' + type).style.borderColor = "var(--accent)";

    if (type === 'normal') {
        text.innerHTML = "<b>Normal Basis:</b> Fee LKR 5,000 (30 Days)";
    } else {
        text.innerHTML = "<b>Urgent Basis:</b> Fee LKR 20,000 (1 Day)";
    }
}

function finalSubmit() {
    alert("Application Submitted Successfully!");
}