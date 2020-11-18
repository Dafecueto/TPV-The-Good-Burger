class MenuView {
    constructor () {
        this.$images = document.getElementById("images-menu");
        this.$tableOrder = document.getElementById("order-tbody");
        this.$tableCustomized = document.getElementById("customized-tbody");
        this.$tableTotalPrice = document.getElementById("total-price");
        this.$tableCustomizedTotalPrice = document.getElementById("customized-price");
        this.$customizeButton = document.getElementById("customize-button");
        this.$addCustomizeBurger = document.getElementById("finish-customize");
        this.$baseOfBurger = document.getElementById("burger-base");

    
    }

      updateOrderTableView(order) {
            const orderTable = order.reduce(
            (stringTable, product) => {
                stringTable += `<tr><td>${product.name}</td><td>${product.price}</td> 
                  <td>${product.quantity}
                  <td><input type='button' id='${product.name}' value='-'></td></tr>`
                  return stringTable;
            }, "")
            this.$tableOrder.innerHTML = orderTable;
      }

      updateCustomizedTableView(burger, ingredients) {
            const burgerBase = `<tr><td><strong>${burger.base}</strong></td><td>${burger.baseprice}</td>`;
            const ingredientsTable = ingredients.reduce(
            (stringTable, ingredient) => {
                stringTable += `<tr>
                    <td>${ingredient.name}</td>
                    <td>${ingredient.price}</td>
                  <td>${ingredient.quantity}</td>
                  <td><input type='button' id='${ingredient.name}' value='-'></td>
                  </tr>`
                  return stringTable;
            }, "")      
            this.$tableCustomized.innerHTML = burgerBase+ingredientsTable;
        }

 

      setTotalPrice(totalPrice) {
          this.$tableTotalPrice.innerHTML = totalPrice;
      }

      setCustomizedPrice(totalPrice) {
          this.$tableCustomizedTotalPrice.innerHTML = totalPrice;
      }



       bindRemoveClick(handler) {
           this.$tableOrder.addEventListener("click", event => {
               const name = event.target.id;
               handler(name)
           })
        } 

        bindRemoveIngredientClick(handler) {
            this.$tableCustomized.addEventListener("click", event => {
                const name = event.target.id;
                handler(name)
            })
        }
          

    bindClickProduct(handler) {
        this.$images.addEventListener("click", event => {
            const name = event.target.value;
            handler(name);
        })
    }

    bindCustomizeButton(handler) {
        this.$customizeButton.addEventListener("click", event => {
            let ingredients = []
            const $ingredients = document.querySelectorAll("input[type=checkbox]:checked");
            for (const ingredient of $ingredients) {
              ingredients.push(ingredient.value);
            }
            handler(this.$baseOfBurger.value, ingredients);
        })
    }

}
