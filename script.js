// Tùy chỉnh Chart.js
Chart.defaults.font.family = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
 
// Chart 1: Trải nghiệm AI
const ctx1 = document.getElementById('aiExperienceChart').getContext('2d');
new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ['Đã sử dụng AI', 'Chưa sử dụng'],
        datasets: [{
            data: [ 98, 1],
            backgroundColor: ['#667eea', '#cbd5e1'],
            borderColor: ['#667eea', '#cbd5e1'],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 20,
                    font: { size: 14 }
                }
            }
        }
    }
});
 
// Chart 2: Năm học
const ctx2 = document.getElementById('yearChart').getContext('2d');
new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Năm 1', 'Năm 2', 'Năm 3', 'Năm 4', 'Khác'],
        datasets: [{
            label: 'Số lượng',
            data: [33, 20, 17, 17, 13],
            backgroundColor: ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe'],
            borderRadius: 8
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            x: { beginAtZero: true, max: 35 }
        }
    }
});
 
// Chart 3: Tần suất sử dụng
const ctx3 = document.getElementById('frequencyChart').getContext('2d');
new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['Mỗi ngày', 'Vài lần/tuần', 'Vài lần/tháng'],
        datasets: [{
            label: 'Số người',
            data: [27, 34, 39],
            backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
            borderRadius: 8
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: { beginAtZero: true, max: 40 }
        }
    }
});
 
// Chart 5: Công cụ AI
const ctx5 = document.getElementById('toolsChart').getContext('2d');
new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ['Chat GPT', 'Gemini', 'Claude', 'DeepSeek', 'Khác'],
        datasets: [{
            label: 'Lần được sử dụng',
            data: [40, 32, 11, 9, 8],
            backgroundColor: '#667eea',
            borderRadius: 8
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            x: { beginAtZero: true, max: 45 }
        }
    }
});
 
// Chart 6: Mục đích sử dụng
const ctx6 = document.getElementById('purposeChart').getContext('2d');
new Chart(ctx6, {
    type: 'bar',
    data: {
        labels: [
            'Giải bài tập',
            'Giải thích kiến thức',
            'Tóm tắt bài học',
            'Viết bài luận/báo cáo',
            'Dịch tài liệu',
            'Ôn tập/thi cử'
        ],
        datasets: [{
            label: 'Số lần sử dụng',
            data: [60, 50, 55, 25, 27, 45],
            backgroundColor: ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe', '#43e97b'],
            borderRadius: 8
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            x: { beginAtZero: true, max: 65 }
        }
    }
});