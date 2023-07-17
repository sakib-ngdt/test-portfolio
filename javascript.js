function bar_chart() {
    document.getElementById("pie_chart").style.display = "none";
    document.getElementById("line_chart").style.display = "none";
    let can = document.getElementById("bar_chart");
    can.style.display = "initial";
    let c = can.getContext('2d');
    let chart = new Chart(c, {
        type: "bar",
        data: {
            labels: ["C++", "Python", "Java", "C#", "Javascript"],
            datasets: [{
                label: "My Skills",
                data: [9, 9, 7, 8, 7],
                backgroundColor: ["blue", "blue", "blue", "blue", "blue"]
            }]
        },
        options: {
            
        }
    });
}



function pie_chart() {
    document.getElementById("bar_chart").style.display = "none";
    document.getElementById("line_chart").style.display = "none";
    let can = document.getElementById("pie_chart");
    can.style.display = "initial";
    let c = can.getContext('2d');
    let chart = new Chart(c, {
        type: "pie",
        data: {
            labels: ["C++", "Python", "Java", "C#", "Javascript"],
            datasets: [{
                label: "My Skills",
                data: [9, 9, 7, 8, 7],
                backgroundColor: [
                    "rgba(255, 0, 0, 0.6)",
                    "rgba(0, 255, 255, 0.8)",
                    "rgba(255, 255, 0, 0.8)",
                    "rgba(0, 255, 0, 0.8)",
                    "rgba(0, 0, 255, 0.6)"
                ]
            }]
        },
        options: {
            
        }
    });
}


function line_chart() {
    document.getElementById("bar_chart").style.display = "none";
    document.getElementById("pie_chart").style.display = "none";
    let can = document.getElementById("line_chart");
    can.style.display = "initial";
    let c = can.getContext('2d');
    let chart = new Chart(c, {
        type: "line",
        data: {
            labels: ["label1", "label2", "label3", "label4", "label5"],
            datasets: [{
                label: "Line Chart 1",
                data: [25, 16, 48, 18, 44],
                borderColor: "black"
            },
            {
                label: "Line Chart 2",
                data: [100, 75, 80, 40, 10],
                borderColor: "red"
            }
        ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}