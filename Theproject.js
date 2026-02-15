const users = [
    { name: "Mahesh Dall", photo: "https://as1.ftcdn.net/v2/jpg/05/78/74/94/1000_F_578749450_272SSVigRijGegjZ2PmodnMPVIspqnfM.jpg", bio: "mahesh dalla mera name" },
    { name: "Aman Sharma", photo: "https://images.unsplash.com/vector-1769600502135-d75bb207a9e6?q=80&w=1074&auto=format&fit=crop", bio: "Full stack developer by day..." },
    { name: "Zaid Khan", photo: "https://randomuser.me/api/portraits/men/32.jpg", bio: "Hardcore coder..." },
    { name: "Rohan Das", photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=500", bio: "Mechanical engineer..." },
    { name: "Sunny Pajji", photo: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=500", bio: "Lassi, Paratha aur Python..." },
    { name: "Arjun Reddy", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500", bio: "Short tempered but code ekdum shant..." },
    { name: "Lucky Singh", photo: "https://randomuser.me/api/portraits/men/45.jpg", bio: "Stock market ka king..." },
    { name: "Deepak Rawat", photo: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=500", bio: "Uttarakhand se hoon..." },
    { name: "Bunty", photo: "https://randomuser.me/api/portraits/men/11.jpg", bio: "Sabka bhai, Bunty bhai..." }
];

const inp = document.querySelector(".inp");
const cardsContainer = document.querySelector(".cards");

// 1. Optimized Function using Map and Join (Fatafat rendering)
function showUsers(arr) {
    // Agar koi match nahi mila toh message dikhao
    if (arr.length === 0) {
        cardsContainer.innerHTML = `<h2 style="color: white;">Bhai, ye banda list mein nahi hai!</h2>`;
        return;
    }

    // Map function HTML strings ka array banata hai, aur join usey ek lamba string bana deta hai
    const clutter = arr.map(user => `
        <div class="card">
            <img src="${user.photo}" class="bg-img" loading="lazy" />
            <div class="blurred-layer" style="background-image: url('${user.photo}')"></div>
            <div class="content">
                <h3>${user.name}</h3>
                <p>${user.bio}</p>
            </div>
        </div>
    `).join("");

    // Ek hi baar mein poora HTML update (Fastest method)
    cardsContainer.innerHTML = clutter;
}

// 2. Initial Render
showUsers(users);

// 3. Optimized Search Logic
inp.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchTerm) // startsWith se better includes hota hai
    );
    
    showUsers(filteredUsers);
});


showUsers(user);