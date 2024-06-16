function changeTheme() {
    const branch = document.getElementById('branchSelector').value;
    document.body.className = branch;
    document.querySelector('header').className = branch;
}

document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const subject = document.getElementById('subject').value;
    const notes = document.getElementById('notes').value;

    const notesContainer = document.getElementById('notesContainer');

    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note', 'col-md-4');
    noteDiv.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${subject}</h5>
                <p class="card-text">${notes}</p>
                <a href="#" class="btn btn-primary" onclick="downloadNotes('${subject}', '${notes}')">Download</a>
            </div>
        </div>
    `;

    notesContainer.appendChild(noteDiv);

    document.getElementById('uploadForm').reset();
});

function downloadNotes(subject, notes) {
    const element = document.createElement('a');
    const file = new Blob([notes], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${subject}.txt`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
}
