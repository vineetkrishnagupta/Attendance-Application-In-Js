function myFunction() {

    var input, filter, table, tr, td0, td1, i, txtValue0, txtValue1;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {

        td0 = tr[i].getElementsByTagName("td")[0];
        td1 = tr[i].getElementsByTagName("td")[1];

        if (td0 || td1) {

            txtValue0 = td0.textContent || td0.innerHTML;
            txtValue1 = td1.textContent || td1.innerHTML;

            if ((txtValue0.toUpperCase().indexOf(filter) > -1) ||(txtValue1.toUpperCase().indexOf(filter) > -1) ) {
                
                tr[i].style.display = "";

            } 
            else {

                tr[i].style.display = "none";

            }

        }     

    }

}
/*

 * MAKE BY Er. Vineet K. gupta(B.tech)
 * Email - vineetkrishnagupta@gamil.com.
 * Phone - +91 63945-12899, +91 98397-60815.

 */