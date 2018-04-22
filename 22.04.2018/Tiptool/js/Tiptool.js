// Constructor for Tiptool

function Tiptool(selector, userSettings) {

    var elements = document.querySelectorAll(selector);

    var defaults = {
        text: "It is demo text",
        backColor: "#555",
        fontColor: "white",
        borderRadius: "10px",
        border: null,
        position: "top"
    }

    var settings = extend(defaults, userSettings);

    for(var element of elements)
    {
        //make elements relative
        element.style.position = "relative";

        // add first span for text
        var span1 = document.createElement('span');
        span1.classList.add("tiptool-text");
        span1.innerText = settings.text;
        span1.style.backgroundColor = settings.backColor;
        span1.style.color = settings.fontColor;

        // add second span for triangle
        var span2 = document.createElement('span');
        span2.classList.add("tiptool-caret");

        //append spans to elements
        element.appendChild(span1);
        element.appendChild(span2);

        //Set position
        setPosition(element, span1, span2, settings.position)

        // add hover to elements to show spans
        element.addEventListener("mouseenter", function(){
            var span1 = this.querySelector(".tiptool-text");
            var span2 = this.querySelector(".tiptool-caret");

            span1.style.visibility = "visible";
            span2.style.visibility = "visible";
        })
        element.addEventListener("mouseleave", function(){
            var span1 = this.querySelector(".tiptool-text");
            var span2 = this.querySelector(".tiptool-caret");

            span1.style.visibility = "hidden";
            span2.style.visibility = "hidden";
        })

    }

    function setPosition(parent, child1, child2, position){
        if(position == "top")
        {
            child1.style.top = -(child1.offsetHeight + 20) + "px";
            child1.style.left = "calc((100% - " + child1.offsetWidth + "px)/2)";

            child2.style.top = "-20px";
            child2.style.left = "50%";
            child2.style.transform = "translateX(-50%)";
            child2.style.borderTopColor = settings.backColor;
        }
        else if(position == "left")
        {
            child1.style.top = "50%";
            child1.style.left = -(child1.offsetWidth + 20) + "px";
            child1.style.transform = "translateY(-50%)";

            child2.style.top = "50%";
            child2.style.left = "-20px";
            child2.style.transform = "translateY(-50%)";
            child2.style.borderLeftColor = settings.backColor;
        }
        else if(position == "right")
        {
            child1.style.top = "50%";
            child1.style.left = (parent.offsetWidth + 20) + "px";
            child1.style.transform = "translateY(-50%)";

            child2.style.top = "50%";
            child2.style.left = (parent.offsetWidth) + "px";
            child2.style.transform = "translateY(-50%)";
            child2.style.borderRightColor = settings.backColor;
        }
        else if(position == "bottom")
        {
            child1.style.top = (parent.offsetHeight + 20) + "px";
            child1.style.left = "calc((100% - " + child1.offsetWidth + "px)/2)";

            child2.style.top = parent.offsetHeight + "px";
            child2.style.left = "50%";
            child2.style.transform = "translateX(-50%)";
            child2.style.borderBottomColor = settings.backColor;
        }
    }

    function extend(o1, o2) {
        for (var item in o2) {
            if (o2.hasOwnProperty(item)) {
                o1[item] = o2[item];
            }
        }
        return o1;
    }
}