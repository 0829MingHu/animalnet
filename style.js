function search() {
             var search_value = document.getElementById('box').value;
             var url = 'explore.html';
             switch(search_value) {
                 case 'aaa':
                     url = 'a.html';
                     break;
                 case 'bbb':
                     url = 'b.html';
                     break;
                 case 'ccc':
                     url = 'c.html';
                     break;
				case 'ddd':
				    url = 'd.html';
				    break;
             }
             location = url;
         }