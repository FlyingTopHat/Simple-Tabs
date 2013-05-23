# Simple Tabs (jQuery plugin)

A simple jQuery plugin for creating tabs, which have the added benefit of gracefully degrading if JavaScript isn't available.

## Example usage
    <div>
        <ul id="tab-nav">
            <li><a href="#tab-1">Example Tab 1</a></li>
            <li><a href="#tab-2">Example Tab 2</a></li>
        </ul>
   
        <div id="tab-1">Example text for tab body 1</div>
        <div id="tab-2">Example text for tab body 2</div>
    </div>
    
    <script type="text/javascript">
        $("#tab-nav").tabmenu();
    </script>
