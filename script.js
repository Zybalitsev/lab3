window.onload = () => {
	let table = document.createElement("table");
	table.style.borderCollapse = 'collapse';
	let running = false;
	let counter = 0;
	let interval = 0;
	table.border = "1"; 
	let columns = ["Num", "Data"];
	let row = document.createElement("tr");
	row.style.backgroundColor = '#ffd4d4';

	for (column of columns) {
		td = document.createElement("th");
		td.innerHTML = column;
		td.style.padding = "10px";
		row.appendChild(td);
	}

	table.appendChild(row);

	document.body.appendChild(table);
	
    let GetData = () => {
		if (!running) {
			button.innerHTML = "Остановить генерацию";
			running = !running;
			time = GetDelay();
			interval = setInterval(() =>
            {
				random_data = parseInt(Math.random() * 500);
				let row = document.createElement("tr");
				let counter_td = document.createElement("td");
				let data_td = document.createElement("td");

                let counterS = counter.toString();
                let dataS = random_data.toString();

				counter_td.innerHTML = counter;
				data_td.innerHTML = random_data;

				counter_td.style.padding = "10px";
				data_td.style.padding = "10px";

				row.appendChild(counter_td);
				row.appendChild(data_td);
				table.appendChild(row);

				if (counter % 2 == 0) {
					row.style.backgroundColor='#daf5cb';

                    counter_td.innerHTML = counterS.italics();
                    data_td.innerHTML = dataS.italics();
				} else {
					row.style.backgroundColor='#d4d4fc';
                    
                    counter_td.style.fontWeight = "bold";
                    data_td.style.fontWeight = "bold";
				}
				
				counter++;
			}, time);
		} 
        else 
        {
			running = !running;
			button.innerHTML = "Начать генерацию";
			clearInterval(interval);
		}
	};		

	let GetDelay = () => {
		item = document.getElementById("delay");
		delay = parseInt(item.value) * 1000;
		return delay;
	};

	let button = document.getElementById("submit_button");
	button.addEventListener("click", GetData);
}