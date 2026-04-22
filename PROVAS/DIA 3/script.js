function add(){
   const ele = document.getElementById("novo");
	ele.innerHTML = `<div class="card" style="width: 22rem;" aria-hidden="true">
            <img src="img/img_.svg" class="card-img-top" alt="Placeholder Copa">
            
                <div class="card-body"> 
                    <h5 id="Nome" class="card-title placeholder-glow">
                        <span class="placeholder col-6"></span>
                        <span id="Rank" class="badge text-bg-secondary">-</span>
                    </h5>
                    <p class="card-text placeholder-glow">
                        <span id="Data_Nas" class="placeholder col-4"></span><br>
                        <span id="Alutra" class="placeholder col-4"></span><br>
                        <span id="Posição " class="placeholder col-6"></span><br>
                    </p>

                
                </div>`	;
}