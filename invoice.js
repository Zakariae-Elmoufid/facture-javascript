document.addEventListener('DOMContentLoaded', function() {
    let  count = 0;
    const invoiceTable = document.getElementById('invoiceTable').getElementsByTagName('tbody')[0];
    const invoiceTotal = document.getElementById('invoiceTotal');
    const addBtn = document.querySelector('.add-button');
    
    addBtn.addEventListener('click', function(){
        count += 1;
        addNewItem();
    });

    // Ajouter un nouveau item 
    function addNewItem() {
    let trow = document.createElement("tr");
    trow.innerHTML = `
           
                <td>Article ${count}</td>
                <td><input type="number" value="1" class="quantity" min="0" oninput=""></td>
                <td><input type="number" value="10" class="unitPrice" min="0" step="0.01"></td>
                <td class="itemTotal">10.00</td>
                <td ><button onclick="removeRow(${count})" >remove</button></td>
      `        ;
      invoiceTable.appendChild(trow);
    
 
    
        const quantityInput = trow.querySelector('.quantity');
        const unitPriceInput = trow.querySelector('.unitPrice');


        quantityInput.addEventListener('input', () => updateItemTotal(trow));
        unitPriceInput.addEventListener('input', () => updateItemTotal(trow));
    }    
        // these are selection helpers
        


    // This function updates the total amount in each row ( item price * Qte )
    function updateItemTotal(row) {
        const quantity= row.querySelector('.quantity').value;
        const unitPrice= row.querySelector('.unitPrice').value;
        const itemTotal = row.querySelector('.itemTotal');

        itemTotal.textContent = quantity * unitPrice ;
 
        updateInvoiceTotal();

    }
    

    // This function updates the total amount of the invoice (sum all Item totals)
    function updateInvoiceTotal() {
        const rows = invoiceTable.querySelectorAll('tr');
        let total = 0 ;
       rows.forEach(function(item ){
            const itemTotal = parseFloat(item.querySelector('.itemTotal').textContent);
            total += itemTotal ;
       })
       invoiceTotal.textContent = total;

    }

 


    // If you finish the above functions, consider adding a delete button
   

 });