const invoiceTable = document.getElementsByTagName('tbody')[0];
const invoiceTotal = document.getElementById('invoiceTotal');
const addBtn = document.querySelector('.add-button');
let  count = 0;
    
    addBtn.addEventListener('click', function(){
        count += 1;
        addNewItem();
    });

    // Ajouter un nouveau item 
    let trow;
    
    function addNewItem() {

        trow = document.createElement("tr");

        trow.innerHTML = `
                <td>Article ${count}</td>
                <td><input type="number" value="1" id="quantity${count}" min="0" oninput="updateItemTotal(${count})"></td>
                <td><input type="number" value="10" id="unitPrice${count}" min="0" oninput="updateItemTotal(${count})"></td>
                <td class="itemTotal" id="itemTotal${count}">10.00</td>
                <td ><button onclick="removeRow(${count}) " >remove</button></td>
      `        ;
      invoiceTable.appendChild(trow);
      updateInvoiceTotal();
 
    }    
        


    // This function updates the total amount in each row ( item price * Qte )
    function updateItemTotal(coun) {
        const quantity= document.getElementById(`quantity${coun}`).value || 0;
        const unitPrice= document.getElementById(`unitPrice${coun}`).value || 0;
        const itemTotal = document.getElementById(`itemTotal${coun}`);

        

        itemTotal.textContent = quantity * unitPrice ;
 
        updateInvoiceTotal()

    }

    // This function updates the total amount of the invoice (sum all Item totals)
    function updateInvoiceTotal() {
        const rows = invoiceTable.querySelectorAll('tr');
        console.log(rows);
        let total = 0 ;
       rows.forEach(function(item ){
            const itemTotal = parseFloat(item.querySelector('.itemTotal').textContent);
            total += itemTotal ;
       })
       invoiceTotal.textContent = total;

    }

    // If you finish the above functions, consider adding a delete button

    function removeRow(count) {
        const row = document.getElementById(`quantity${count}`).closest('tr');
        if (row) {
            row.remove();  // Suppression de la ligne
            updateInvoiceTotal();  // Mise à jour du total après suppression
        }
    }
