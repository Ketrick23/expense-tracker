const body = document.querySelector("body"),
        sidebar = body.querySelector(".sidebar"),
        toggle = body.querySelector(".toggle"),
        modeSwtich = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text");

        toggle.addEventListener("click", () => {
            sidebar.classList.toggle("close");
        });

        modeSwtich.addEventListener("click", () => {
            body.classList.toggle("light");

            if(body.classList.contains("light")) {
                modeText.innerText = "Dark Mode"
            }else {
                modeText.innerText = "Light Mode"
            }
        });

const transaction = [
    {
        id: 1,
        deskripsi: 'salary',
        jumlah: 2000,
        tanggal: new Date(),
        type: 'income'
    },
    {
        id: 2,
        deskripsi: 'Potong Rambut',
        jumlah: 500,
        tanggal: new Date(),
        type: 'expense'
    },
    {
        id: 3,
        deskripsi: 'Konser',
        jumlah: 300,
        tanggal: new Date(),
        type: 'expense'
    },
];

const list = document.getElementById("listtransaksi");
const status = document.getElementById("status");

function renderList() {
    list.innerHTML = '<li>item</li>';

    if(transactions.length === 0) {
        status.textContent = "Tidak ada transaksi.";
        return;
    }
    transactions.forEach(({deskripsi, tanggal, jumlah }) => {
        const li = document.createElement('li');

        li.innerHTML = `
            <div class="deskripsi">
                <h4>${deskripsi}</h4>
                <p>${new Date(tanggal).toLocaleDateString()}</p>
            </div>   
        
            <div class="jumlah">
                <span>${jumlah}</span>
            </div>

        `;

        list.appendChild(li);
    });
}

renderList();