// Sample data (titles with ids)
const titles =
    [
        "Access Control Rules for PTC FlexPLM",
        "Applying Rules in the Policy Administration Utility",
        "Background Process Queues",
        "Change State",
        "Change Team",
        "Creating Rules in the RFA Library Domain",
        "Download Access for Retail Documents",
        "Examples of Use Cases",
        "Filters and Views",
        "Material Library",
        "Modify Access for Retail Documents",
        "Quotes or RFQ",
        "Retail Profile",
        "Revise Access for Retail Documents",
        "Revisable Entities",
        "Synchronized Type Sets",
        "Copying Product Content to the Clipboard",
        "Copying Individual Products",
        "Using the Copy / Link Product: Product Attributes Page",
        "Using the Copy / Link Product: Product-Season Attributes Page",
        "Data Synchronization",
        "Copying Products from the Line Sheet",
        "Copying Multiple Products",
        "Copying Products from the Product Pages",
        "Copying Product Content Using the Clipboard",
        "Using Clipboard Content",
        "Using the Copy / Link Product Page",
        "Copy / Link To Section on the Copy / Link Product Page",
        "Header Section on the Copy / Link Product Page",
        "Placeholder Section on the Copy / Link Product Page",
        "Product Options on the Copy / Link Product Page",
        "Viewing Copied Products",
        "Viewing and Removing Clipboard Content",
        "Advanced Product Creation",
        "Exporting Linked Specification Components",
        "Working with Product Components",
        "Linking Product Components",
        "Synchronizing BOMs",
        "Editing Linked Specification Components",
        "Viewing Linked Specifications and Components",
        "Viewing Linked Specification Components from Individual Component Pages",
        "Viewing Linked Specifications and Components from the Product Relationships Page",
        "Viewing Linked Specifications and Components from the Specifications Summary Page",
        "Linking Individual Products",
        "Linking Products",
        "Linked Products and the Line Sheet",
        "Linking Relationship Types",
        "Linking Multiple Products",
        "Removing Product Links",
        "Updating Linked Products",
        "Additional Property Settings That Influence Relationship Type Behavior",
        "Enabling Automatic Creation of Specification",
        "BOM Synchronization Default Mapping",
        "Clipboard Property Settings",
        "Configuring the Menu Bar and Actions Menu on the Product Page",
        "Deep Copy Property Settings",
        "Advanced Product Creation Administration",
        "Advanced Product Creation Property Settings",
        "Relationship Type Property Settings",
        "Available Product Options",
        "Creating a Relationship Type",
        "Defining Attribute Value Linking",
        "Defining Attribute Transfer Values",
        "Defining the Edit Option",
        "Defining Familial Relationships",
        "Defining a Relationship Type",
        "Enabling Copy of Individual Product Options",
        "Specifying Default Relationship Types",
        "Specifying Link Relationships",
        "About the Bill of Materials",
        "Accessing the BOM",
        "Accessing the BOM from the Favorites Folder",
        "Accessing the BOM from the Libraries Folder",
        "Accessing the BOM from the Quick Links Folder",
        "Examples of Activities and Functional Groups in a BOM",
        "Adding Components to the BOM",
        "Adding Colors",
        "Adding Complex Materials",
        "Adding Materials",
        "Items Affected by BOMs",
        "Before You Begin",
        "Causes of Changes to a BOM",
        "BOM Components",
        "Creating the BOM",
        "Creators of BOMs",
        "Filtering Colorways",
        "Filters in the BOM Editor",
        "BOM Function Icons",
        "Functions of the Edit BOM Page",
        "General Function Buttons",
        "Working in the BOM Editor",
        "Working with Sections",
        "Clearing BOM Content",
        "Cutting, Copying, and Pasting Between Sections",
        "Expanding and Collapsing Sections",
        "Hiding and Showing Columns",
        "Hot Keys in the BOM Editor",
        "BOM Section Icons",
        "Exporting to Excel and CSV",
        "Exporting the BOM",
        "Exporting to PDF",
        "Overview of the BOM Functionality",
        "The Globalized Value Chain",
        "How the BOM Object Exists",
        "Impact of the BOM on Processes",
        "Impact of the BOM on Roles",
        "Bill of Materials",
        "Overrides",
        "Creating Colorway Overrides",
        "Colorways Columns",
        "Material and Supplier Overrides for Colorways",
        "Colorways Rows",
        "Creating Combination Overrides",
        "Creating Non-Product Level Overrides",
        "Simplifying the Creation of an Override",
        "Creating Single Variation Overrides",
        "Verifying Overrides",
        "Working with Overrides",
        "Single BOM vs. Multiple BOMs",
        "Variations",
        "Special Considerations Leading to Variations in a BOM",
        "Creating Variations",
        "Variations and Overrides",
        "Variations and Overrides",
        "Viewing Variations for Editing",
        "Viewing the BOM",
        "Action and Information Icons",
        "Comparing BOMs",
        "Viewing, Creating, and Updating the BOM",
        "Filters in the View BOM Window",
        "Function Icons",
        "Business Administrative Change Promotion",
        "Associating CAD Documents to Products",
        "Associating CAD Documents to Specifications",
        "Exporting CAD Drawings Associated to Specifications",
        "CAD Data Management",
        "Comparing Calendars and Using Dashboards",
        "Initiating a Calendar Instance",
        "Managing Tasks in a Calendar Instance",
        "Calendars",
        "Starting and Completing Tasks",
        "Calendar Templates",
        "Using Calendars with Lifecycle and Workflow Processes",
        "Tracking Bill of Material Changes",
        "Change Events and Change Event Details",
        "Tracking Colorway Changes",
        "Tracking Construction Set Changes",
        "Tracking Cost Sheet Changes",
        "Tracked Changes Indicator",
        "Tracking Image Page Changes",
        "Change Tracking",
        "Tracking Measurement Set Changes",
        "Tracked Objects",
        "Viewing Tracked Changes from the Product History Page",
        "Tracking Product Changes",
        "Tracking Source Changes",
        "Tracking Specification Changes",
        "Specifying the Changes Since Date in the PTC FlexPLM Header",
        "Including a Tracked Changes Report in a Tech Pack",
        "Viewing Change Event Details",
        "Viewing Tracked Changes in the Side Navigation Bar",
        "Viewing Product Changes in the Line Sheet",
        "Working with Tracked Changes",
        "Change Tracking XML Configuration",
        "Change Tracking Customizations",
        "Change Tracking Administration",
        "Configuring the Change Tracking Plug-In",
        "Change Tracking Property Settings",
        "Change Tracking Attributes and Business Objects",
        "Colors",
        "Setting a Favorite Color",
        "Creating a Color from the Library",
        "Using Facets in the Card Layout for Colors",
        "Working with the Grid Layout for Colors",
        "Accessing the Component History",
        "Component",
        "Accessing the Where Used Information",
        "Copying a Component",
        "Creating a Component",
        "Deleting a Component",
        "Editing a Component",
        "Viewing a Component",
        "Associating Components to Specifications",
        "Associating Components to Products",
        "Component Management",
        "Costing",
        "Changing Primary Sources",
        "Displaying Active and What If Cost Sheets",
        "Costing From the Line Sheet",
        "Recalculating Costs",
        "Using Views to Display Cost Sheets",
        "Viewing Colorway-Level Cost Sheets",
        "Viewing Cost Sheets from the Line Sheet",
        "Viewing Sourcing",
        "Working With Cost Sheets from the Line Sheet",
        "The Cost Sheet List Tab",
        "Creating Cost Sheets",
        "Individual Cost Sheet Tabs",
        "Viewing Cost Sheets",
        "Multiple Cost Sheets",
        "Changing Cost Sheet Designations",
        "Copying Cost Sheets",
        "Editing Cost Sheets",
        "Deleting Cost Sheets",
        "The Edit Product Cost Sheet Page",
        "Recalculating Cost Sheets",
        "Associating Cost Sheet Types to Products",
        "Copying Cost Sheets Administration",
        "Costing and the Bill of Materials",
        "Cost Sheet Attributes",
        "The Cost Sheet Hierarchy",
        "Cost Sheet Hierarchy Relationships",
        "Default Name of the Primary Cost Sheet",
        "Defining Who Can Recalculate Cost Sheets",
        "Enabling and Disabling Cost Sheet Comparisons",
        "Displaying Cost Sheets in the Cost Sheet List Tab",
        "Enabling Cost Sheets",
        "Enabling Multiple Cost Sheets",
        "Enabling Sourcing Configurations",
        "Exporting the Cost Sheet",
        "Costing Administration",
        "Costing Property Settings",
        "Specifying Which Cost Sheets to Recalculate",
        "Managing Cost Sheets",
        "Viewing Attributes on the Product Costing Page",
        "Working with the Type and Attribute Management Utility for Cost Sheets",
        "Cross-Site Request Forgery",
        "Configuring Cross-Site Request Forgery Protection",
        "Cross-Site Request Forgery Prevention",
        "Troubleshooting Cross-Site Request Forgery Issues",
        "Creating Dashboard Definition",
        "Dashboard Definition",
        "Managing Dashboard Definition",
        "Date Format Administration",
        "Discussions",
        "Using Actions",
        "Closing or Deleting Discussions",
        "Editing Topics",
        "Posting Draft Comments",
        "Creating Comments",
        "Subscribing to Discussions or Topics",
        "Using Tables",
        "Creating Topics",
        "PTC FlexPLM Documentation Resources",
        "Configuring the Default View",
        "Enabling Latest Sample",
        "Enabling User’s Products",
        "Sample Console Administration",
        "About the PTC FlexPLM Help Center",
        "Using Search",
        "Using the Help Center",
        "Asynchronous Image Conversion",
        "Benefits of Asynchronous Image Conversion",
        "Configuring FlexPLM for Asynchronous Image Conversion",
        "Overview of Asynchronous Image Conversion",
        "Audience",
        "Configuring FlexPLM to Use ImageMagick",
        "Properties for Enabling the Image Generation Feature",
        "Configuring FlexPLM for Image Generation",
        "Downloading the Software",
        "Environments",
        "Linux",
        "Installing and Configuring the Runtime Environment",
        "Unix Solaris 10",
        "Windows Platform",
        "Installing GPL Ghostscript",
        "Installing Ghostscript Fonts",
        "Installing ImageMagick",
        "ImageMagick for PTC FlexPLM",
        "Advanced Deployment Considerations",
        "Client/End User",
        "Configuring PTC FlexPLM for Cluster Configuration and Multiple PTC Embedded Servlet Engine Instances",
        "LoadBalancer and Multiple Servlet Engine Configuration",
        "Installing PTC FlexPLM on an Existing Windchill PDMLink Multi-Node Cluster",
        "Configuration of Property Files for Windchill PDMLink and PTC FlexPLM Clusters",
        "Configure OAuth Delegated Authorization for Design Suite",
        "Configuring Alternative Authentication in FlexPLM",
        "Configuring OAuth Delegated Authorization",
        "Configuring PTC FlexPLM for Design Suite",
        "Conventions",
        "Create an Additional Properties File",
        "Creo View Installation and Configuration",
        "Configuring the Default Life Cycle (Required)",
        "Editing Web.xml",
        "Configuring Exception Handling",
        "Exporting Users and Groups",
        "Importing Users, Groups, and Group Memberships into LDAP",
        "Exporting Users and Groups from LDAP",
        "Loading Groups into the Database",
        "Using the Windchill DS Control Panel",
        "File Structure Changes",
        "PTC FlexPLM Server",
        "Installing a PTC FlexPLM Patch",
        "Prerequisites and Conventions",
        "Loading and Configuring PTC FlexPLM",
        "Extracting PTC FlexPLM to the System",
        "Installation",
        "Merging Client Overrides (Required)",
        "Minimum Memory Configuration Settings",
        "Modifying a CAD Author Profile for Use with PTC FlexPLM",
        "Modifying Configuration Files for Development, Testing, and Production",
        "Creating a New Installation of PTC FlexPLM",
        "Additional Configuration for Nonstandard Installations",
        "Changing the PTC FlexPLM Context",
        "Deploying the PTC FlexPLM Help Center",
        "Enabling Discussions in PTC FlexPLM",
        "Using a Windchill Context Other Than /Windchill",
        "Configuring the Servlet Engine",
        "Creating Database Tables, Views, Sequences, and Base Data",
        "Configuring the Web Server",
        "Windchill Releases",
        "Installing and Configuring PTC FlexPLM",
        "Create an OAuth Client in PindFederate that Design Suite will Use to Obtain Access Tokens",
        "Planning an Update",
        "Best Practices for the Update Process",
        "Creating an Effective Update Team",
        "Update Paths",
        "Creating an Update Plan",
        "PTC FlexPLM Access Log",
        "Post-Upgrade System Considerations",
        "Thumbnail Storage Location",
        "Prerequisites",
        "Proxy Configuration Examples",
        "Default PTC FlexPLM Page Displayed with No Profiles Defined",
        "Example: Out-of-the-Box Sourcing Manager Profile Displayed",
        "Configuring Filters for Components",
        "Creating Role-Based Home Pages",
        "Role-Based Homepage Configuration",
        "Previous PTC FlexPLM Home Page with No Role-Based Profiles Enabled",
        "Sample XML",
        "Security Assertion Markup Language (SAML) Authentication",
        "Single-Sign-on Authentication",
        "Enabling User Access to PTC FlexPLM through Team Membership",
        "Change Default PTC FlexPLM Object Column Sizes",
        "Adding Members to the Library Team",
        "Using the Retail and PDMUsers Groups",
        "Configuring the Location to Save Thumbnails",
        "Configuring the Thumbnail Location on Unix-Based Systems",
        "Configuring the Thumbnail Location for Production Installation",
        "Updating Information from Windchill",
        "Updating PTC FlexPLM",
        "Updating FlexPLM and Windchill Configurations",
        "Updating securityContext.xml",
        "Updating securityContext.properties.file",
        "Exporting Groups to Load Files",
        "Prerequisites",
        "Configuring PTC FlexPLM",
        "Configuring and Administering Windchill Index Search (SOLR)",
        "Administration User Interface",
        "Verification Steps",
        "Prerequisites for Windchill Index Search (SOLR)",
        "Query Testing",
        "WIS Indexing Properties",
        "Removing Products and Colorways from the Line Sheet",
        "Administering Colorway Manager Properties",
        "Administering Primary Materials",
        "Colorway Management Overview",
        "Copying or Moving Products",
        "Creating Views in the Line Sheet",
        "Creating Specifications from the Line Sheet",
        "Editing the Attribute Values in the Line Sheet",
        "Editing the Line Sheet",
        "Exporting the Line Sheet Viewer",
        "Using the Colorway Manager",
        "Working with the Grid Layout in Line Sheet",
        "Editing Cells in the Grid Layout",
        "Displaying Information in the Grid Layout",
        "Filtering Items in the Grid Layout",
        "Selecting Rows in the Grid Layout",
        "Sorting Information in the Grid Layout",
        "Hiding or Showing Columns in the Line Sheet",
        "Managing Season Colorways",
        "Line Sheet Management",
        "Working with Primary Materials",
        "Viewing Primary Materials",
        "Running the Change Report for a Season",
        "Working with Season Groups in the Line Sheet",
        "Line Sheet Viewer",
        "Setting a Primary BOM for a Specification",
        "Setting a Primary Specification for a Season",
        "Using Facets in the Card Layout for Line Sheet",
        "Setting a Primary Material within a BOM",
        "Working with the Card Layout for a Line Sheet",
        "Working with Filter Options in the Line Sheet",
        "Working with View Options in the Line Sheet",
        "PTC FlexPLM Licensing",
        "Manage Licenses",
        "Managing PTC FlexPLM Logging",
        "Materials",
        "Add Multiple Colors to Materials",
        "Add Suppliers to Materials",
        "Compare Materials",
        "Creating a Material from the Library",
        "Setting a Favorite Material",
        "Using Facets in the Card Layout for Materials",
        "To View Associated Colors and Samples on the Materials Results Page",
        "Working with the Grid Layout for Materials",
        "Comparing Multiple Materials",
        "Comparing Multiple Material Suppliers",
        "Creating a Material Color",
        "Material Color Management",
        "Comparing Materials and Material Suppliers",
        "Searching When a Color is Already Selected",
        "Searching by Complex Material Component",
        "Searching Complex Materials",
        "Searching the Material Color Library",
        "Searching Simple Materials",
        "Viewing Material Color Details",
        "Adding Existing Materials, Material Suppliers, and Material Colors to the Materials Tracker Dashboard",
        "Adding Materials, Material Suppliers, and Material Colors to Multiple Materials Trackers",
        "Working with Materials, Material Suppliers, and Material Colors within a Materials Tracker",
        "Adding a Materials Tracker to Favorites",
        "Carrying Over Materials, Material Suppliers, and Material Colors Using the Carry Over Function",
        "Carrying Over Materials, Material Suppliers, and Material Colors Using the Carry Over To Function",
        "Copying Materials, Material Suppliers, and Material Colors within a Materials Tracker Dashboard",
        "Creating a Materials Tracker",
        "Materials Tracker Functionality",
        "Creating Material Colors for Multiple Material Suppliers within a Materials Tracker",
        "Creating Material Colors for a Single Material Supplier within a Materials Tracker",
        "Creating Materials within a Materials Tracker",
        "Creating Material Suppliers for Multiple Materials within a Materials Tracker",
        "Creating Material Suppliers for a Single Material within a Materials Tracker",
        "Accessing the Materials Tracker Dashboard",
        "Materials Tracker Actions on the Details Tab",
        "Using Options on the Materials Tracker Dashboard",
        "Working with the Materials Tracker Dashboard",
        "Using Views and Filters on the Materials Tracker Dashboard",
        "Deleting a Materials Tracker",
        "Editing the Materials Tracker Dashboard",
        "Editing Materials Tracker Details",
        "Exporting the Materials Tracker Dashboard",
        "Initiating a Calendar for a Materials Tracker",
        "Managing Calendars for Materials Trackers",
        "Moving Materials, Material Suppliers, and Material Colors Between Materials Tracker Dashboards",
        "Materials Tracker",
        "Removing Items from a Materials Tracker",
        "Finding a Materials Tracker",
        "Associating Material Tracker Calendar Tasks to Materials, Material Suppliers, or Material Colors",
        "Vendor Access to the Materials Tracker",
        "Viewing Calendars and Calendar Tasks for Materials Trackers",
        "Materials Tracker Information on the Where Used Page",
        "Additional Measurements Functionality",
        "Creating and Managing Grade Rule Templates",
        "Creating and Managing Measurement Libraries",
        "Creating and Managing Measurement Templates",
        "Creating and Managing Points of Measure",
        "Viewing Measurement and Grade Rule Templates",
        "Actions List for Viewing Measurement and Grade Rule Templates",
        "The View Grade Rule Template Page",
        "Measurement and Grade Rule Template Images",
        "The View Measurement Template Page",
        "Measurement Libraries — Where Used",
        "Working with the Measurement Editor",
        "Measurement Editor Page Layout",
        "Measurement Editor Page: Attribute Boxes",
        "Measurement Editor Page: Header Buttons",
        "Working with the Measurement Table Editor",
        "Buttons in the Measurement Table Editor",
        "Fraction Help in the Measurement Table Editor",
        "Entering Grade Rules in the Measurement Table",
        "Highlighting Rows in the Measurement Table Editor",
        "Hot Keys in the Measurement Table Editor",
        "Icons in the Measurement Table Editor",
        "Entering Null Values in the Measurement Table",
        "Points of Measure in the Measurement Table Editor",
        "Sizes in the Measurement Table Editor",
        "Actions in the Measurement Table Editor",
        "Measurements",
        "Product Measurement Sets",
        "Additional Actions for Product Measurement Sets",
        "Copying Product Measurement Sets",
        "Creating New Product Measurement Sets",
        "Debugging Product Measurement Sets",
        "Deleting Product Measurement Sets",
        "Viewing and Updating Product Measurement Set Images",
        "Controlling the Measurement Set Table Display",
        "Editing Product Measurement Sets",
        "Editing POM Images in Product Measurement Sets",
        "Viewing Product Measurement Sets",
        "Viewing Attributes of Product Measurement Sets",
        "Viewing Associated Specifications of Product Measurement Sets",
        "Product Sizing",
        "Viewing, Creating, and Editing Product Measurement Sets",
        "Grade Rule Template Property Settings",
        "Measurements Administration",
        "Measurements Library Property Settings",
        "Measurement Template Property Settings",
        "Measurements Navigation Property Settings",
        "Product Measurement Set Property Settings",
        "Measurements Property Settings",
        "System-Wide Property Settings",
        "General Template and Set Property Settings",
        "Managing Measurements",
        "Measurements Types and Attributes",
        "Measurements Hierarchy",
        "Icons",
        "Overview of PTC FlexPLM",
        "Buttons",
        "Common Elements and Functions",
        "Action Menus",
        "Clipboard",
        "Date Fields",
        "Emailing Content",
        "Exporting Content",
        "Hiding and Showing Content",
        "Hot Keys",
        "List Boxes",
        "Pop-Up Windows",
        "Tables",
        "Text Editors",
        "Frames",
        "Header",
        "Home Page",
        "Navigation",
        "Material Tab",
        "Product Page",
        "Product Tab",
        "Side Navigation Bar",
        "Site Tab",
        "Page Navigation",
        "Search",
        "Search Criteria",
        "Default Views and Filters",
        "Filters",
        "Naming Views and Filters",
        "Quick Search",
        "Search Results",
        "Views",
        "Adding Colors to a Palette",
        "Adding Material Colors to a Palette",
        "Adding Materials to a Palette",
        "Palette Associations",
        "Creating a Palette",
        "Creating a Sub Palette",
        "Palettes",
        "Navigating to a Palette",
        "Sub Palette Associations",
        "Adding and Removing Parts in a BOM",
        "Associating a Part to a PTC FlexPLM Product",
        "Associating Parts to Specifications",
        "Associating Parts to Products",
        "Configuring Parts in a BOM",
        "Displaying Parts in a BOM",
        "Part Structures",
        "Searching for Parts",
        "Tracking Changes",
        "Updating Specification to Part Values",
        "Using Parts in a BOM",
        "Viewing Part Data",
        "Viewing Parts Table in Specification",
        "Viewing Specification to Part Values",
        "Creating a Plan",
        "Exporting a Plan",
        "Generating Placeholders from a Season Plan",
        "Planning",
        "Navigating to a Plan",
        "Updating a Plan",
        "Bill of Materials Property Settings",
        "CAD Data Property Settings",
        "Component Property Settings",
        "Discussions Property Settings",
        "System-Wide Property Settings in PTC FlexPLM",
        "Image Property Settings",
        "Property Settings in PTC FlexPLM",
        "Material and Color Property Settings",
        "Materials Tracker Property Settings",
        "Samples Console Property Settings",
        "Search Property Settings",
        "Tech Pack Property Settings",
        "Visual Assets Property Settings",
        "Samples Console",
        "Creating Views in the Samples Console",
        "Editing the Attribute Values in the Samples Console",
        "Editing the Samples Console Grid",
        "Editing the Attribute Values in the Samples Console",
        "Filtering Attributes in the Samples Console",
        "Working with the Grid Layout Samples Console",
        "Editing Cells in the Grid Layout Samples Console",
        "Displaying Information in the Grid Layout",
        "Filtering Items in the Grid Layout",
        "Selecting Rows in the Grid Layout",
        "Sorting Information in the Grid Layout",
        "Hiding or Showing Columns in the Samples Console",
        "Setting Samples as Latest in Samples Console",
        "Browsing to the Samples Console",
        "To View Products and Colorways with or without Samples",
        "To View the Latest Samples",
        "Working with View Options in the Samples Console",
        "Grouping Samples and Viewing values for the Requested Samples",
        "Configuring Attributes in FlexPLM",
        "Configuring Attributes to Use the Auto Create Sample or Sample Request Based on its Status Functionality",
        "Configuring FlexPLM Property Entries to Use the Auto Create Sample or Sample Request Based on its Status Functionality",
        "Configuring FlexPLM to Use the Auto Populate Material Sample Due Date Functionality",
        "Delta Value Display",
        "Details Tab",
        "To Enable and Configure the Auto Creation of a Sample or Sample Request Based on its Status",
        "Enable and Configure Auto Populate Sample Due Date on Material Sample Functionality",
        "Exporting Fit Information",
        "Filtering Samples",
        "Selecting Image Page Types",
        "Samples",
        "Samples List and Comments",
        "Creating Samples",
        "Naming Convention if New Request Gets Created",
        "Auto Create a New Sample or Sample Request Based on Status",
        "Auto Populate Sample Due Date on Material Sample Type",
        "Requesting Material-Color Samples from a Palette",
        "POM and Measurement Set Updates",
        "Sample Request Types",
        "Samples Search",
        "Sample Type Hierarchy",
        "Viewing Images in a 3D View Associated to a Sample",
        "Accessing the Dashboards",
        "Season Dashboards",
        "Status Colors",
        "Using Multiple Plug-ins",
        "Plug-ins",
        "Reverse",
        "Set and Update",
        "Status Totals",
        "Task Colors",
        "Complete Products or Colorways",
        "Incomplete Products or Colorways",
        "Dashboards Page",
        "Tasks Columns",
        "View Options",
        "Totals Table",
        "Accessing Colorway-Sizes",
        "Activating and Deactivating Multiple Colorway-Sizes",
        "Activating and Deactivating a Single Colorway-Size",
        "Active and Inactive Colorway-Sizes",
        "Viewing Active and Inactive Colorway-Sizes",
        "Automatic Creation of Colorway-Sizes",
        "Copying, Moving, and Carrying Over Colorway-Sizes",
        "Automatic Deletion of Colorway-Sizes",
        "Including Additional Colorway-Size Variations",
        "Exporting the Colorway-Size Table",
        "Colorway-Size Variations",
        "Updating a Single Colorway-Size",
        "Updating Multiple Colorway-Sizes",
        "Viewing Colorway-Sizes",
        "Size Definitions and Colorway-Size Variations",
        "Accessing Product Size Definitions",
        "Adding Existing Product Size Definitions to Seasons",
        "Copying, Moving, and Carrying Over Product Size Definitions",
        "Creating Product Size Definitions",
        "Deleting Product Size Definitions",
        "Exporting the Product Size Definition Table",
        "Product Size Definitions",
        "Removing Product Size Definitions from Seasons",
        "Editing Multiple Product Size Definitions",
        "Editing a Single Product Size Definition",
        "Viewing Product Size Definitions",
        "The Size Definition Library",
        "Accessing Size Definition Templates",
        "Creating Size Definition Templates",
        "Deleting Size Definition Templates",
        "Size Definition Templates",
        "Updating Size Definition Templates",
        "Viewing Size Definition Templates",
        "Viewing Where Used Information for Size Definition Templates",
        "Colorway-Size Property Settings",
        "Colorway-Size Relationships",
        "Colorway-Size Types and Attributes",
        "Constraining Product Types to Size Definition Types",
        "Constraining Product Types to Colorway-Size Types",
        "Size Definition and Colorway-Sizes Administration",
        "Size Definition Property Settings",
        "Size Definition Types and Attributes",
        "Administration",
        "Documentation Resources",
        "Welcome to the PTC FlexPLM 12.1.2.0 Help Center",
        "Help Center Help",
        "Installation and Upgrade",
        "Specialized User Capabilities",
        "Administering Document Inclusion in Tech Pack Generation",
        "Asynchronous Tech Pack Generation",
        "Tech Pack Generation",
        "Generating a Tech Pack from the Line Sheet",
        "Including Documents and Parts in Multiple Tech Packs",
        "Tech Pack Output",
        "Report Options in Tech Packs",
        "Generating Tech Packs with Linked Components for BOM Reports",
        "Saving Tech Pack Output as Associated Documents",
        "Including Documents and Parts in Single Tech Packs",
        "Generating a Tech Pack from the Specifications Summary or BOM Page",
        "Including the Tracked Changes Report",
        "Valid Documents for Tech Pack Generation",
        "About a 3D Material Scan",
        "Create 3D Material Scans Using Drag-and-Drop",
        "Create 3D Material Scans",
        "Viewing Images in a 3D View Associated to a Material",
        "User Interface Limitations",
        "Working with the Type and Attribute Management Utility",
        "Logical Attributes Report",
        "Managing Attribute-Based Security Rules",
        "Constraint Best Practices",
        "Adding a New Constraint",
        "Deleting a Constraint",
        "Editing Constraint Data",
        "Edit Constraint Window",
        "Enabling and Disabling a Constraint",
        "Enumerated Value List Constraints",
        "Adding an Enumerated Value List — Create New Enumeration Based On Global Enumeration",
        "Adding an Enumerated Value List — New Enumeration For This Attribute",
        "Adding an Enumerated Value List — Use Existing Global Enumeration",
        "Attribute Constraint Rules",
        "Creating a New Attribute",
        "Defining Your System’s Types and Attributes",
        "Deleting an Attribute",
        "Out-of-the-Box Attributes Supported by PTC FlexPLM",
        "PTC FlexPLM Attributes Reference",
        "Formulas",
        "Graphical Attributes",
        "Hyperlink Attributes",
        "Attribute Information Page",
        "Constraints Tab",
        "Default Values Tab",
        "Visibility Tab",
        "Editing an Attribute Group",
        "Attribute Group Visibility Rules",
        "Breaking Layout Inheritance for PTC FlexPLM Subtypes",
        "Creating a New Attribute Layout",
        "Deleting an Attribute Layout",
        "Editing Attribute Layouts",
        "Deleting a Layout Element",
        "Adding an Image to an Attribute Layout",
        "Conflict Resolution for Inherited Attribute Groups",
        "Adding a Nested Group",
        "Adding a Reusable Table to an Attribute Layout",
        "Viewing an Attribute Layout",
        "FlexPLM Attribute List",
        "Object Reference and Version Reference Attributes",
        "Setting Attribute Properties",
        "Attribute Properties Reference",
        "Care/Wash Images Attributes",
        "Color Choice Attributes",
        "Composite Attributes",
        "Unit of Measure Attributes",
        "Viewing and Setting Attribute Visibility",
        "Attribute Set Report",
        "Editing a Cascading Attribute Rule Condition",
        "Enumerations and Cascading Attribute Rules",
        "Inherited Rules",
        "Circular Dependencies",
        "Creating a New Cascading Attribute Rule",
        "Editing a Cascading Attribute Rule",
        "Cascading Attributes Rules Example",
        "Constraints and the Attribute Set Report",
        "Finding and Addressing Warning Conditions in the Attribute Set Report",
        "Refreshing the Attribute Set Report",
        "Running the Attribute Set Report",
        "Supported Data Types",
        "Derived String, Derived Numeric, and Calculated Attribute Comparison",
        "Mapped Attributes",
        "Creating a New Enumeration Entry",
        "Deleting an Entry",
        "Viewing and Editing Entry Properties",
        "Creating a New Enumeration",
        "Deleting an Enumeration",
        "Viewing and Editing Enumerations",
        "Enabling Enumeration Access for Non-Administrative Users",
        "Creating a New Enumeration Organizer",
        "Viewing and Editing Enumeration Organizers",
        "Deleting an Enumeration Organizer",
        "Localizing Property Values",
        "Managing Exports",
        "Exporting Calendars",
        "Exporting Filters and Views",
        "Exporting Groups",
        "Exporting Line Sheet Data",
        "Exporting Teams",
        "Exporting Type Instance Data",
        "Managing Global Enumerations",
        "Importing Type Instance Data and Line Sheet Data",
        "Managing Types",
        "Managing Measurement Systems",
        "Type and Attribute Management Permissions",
        "Property Value Inheritance",
        "Managing Quantities of Measure",
        "Synchronized Attributes",
        "Synchronized Types",
        "Creating a New Subtype",
        "Deleting a Type",
        "Type Information Page",
        "Attributes Tab",
        "Cascading Attributes Tab",
        "Layouts Tab",
        "Types in PTC FlexPLM",
        "View and Edit Modes",
        "Adding Columns to Types",
        "AddColumns Report and Addressing Warnings",
        "Example: Allocating Additional Columns for a Type",
        "Common AddColumns Tool Usage Scenarios",
        "Manual Execution of the AddColumns Tool After Installation Requires Rebuilding Client Jars",
        "Running the AddColumns Tool",
        "Setting a Larger Database Column Size for String Local Attributes",
        "Creating an Export Definition File",
        "Creating or Updating Custom Property Definitions on Enumeration Entries",
        "Creating, Updating, or Deleting a Property Using a Load File",
        "Defining Custom Properties for Enumeration Entries",
        "Custom Property Examples",
        "Creating Database Views",
        "Deleting Custom Property Definitions for Enumerated Entries",
        "Domain Prefixes in Type Names",
        "Enabling Logging for Imports",
        "Exporting and Importing Type Information",
        "Exporting All Attribute-Based Security Rules",
        "Exporting Attribute-Based Security Rules for a Specific Type",
        "Exporting Attribute Group Visibility Rules",
        "Exporting Global Enumerations",
        "Exporting Types",
        "Importing Attribute-Based Security Rules",
        "Importing Attribute Group Visibility Rules",
        "Importing Types and Global Enumerations",
        "Type and Attribute Management Command-Line Tools",
        "Using the TypeAttributeMoveTool Utility for FlexPLM",
        "Verifying the Custom Property Display Value",
        "Assumptions and Prerequisites for Upgrading",
        "CAD Data Management",
        "Customization Considerations",
        "Other Considerations",
        "Upgrading Customizations and Pre-Upgrade Considerations",
        "custom.lcs.properties File",
        "Custom Resource Files",
        "Database",
        "Help Center",
        "Upgrading to the Latest Version of PTC FlexPLM",
        "Upgrade Steps for PTC FlexPLM",
        "Obtaining Required CD Images, Patches, Windchill Diagnostic Utility Patches, and FlexPLM Diagnostic Utility Patches",
        "Preparing to Upgrade",
        "Post-Upgrade Steps for Windchill and PTC FlexPLM",
        "Pre-Upgrade Steps for Windchill with PTC FlexPLM",
        "Recreating Database Views",
        "Regenerating Type-Level Database Views",
        "Setting Properties to Control Inactivity and Overall Timeout",
        "Thumbnail Storage Location",
        "Customization to the FlexPLM User Interface",
        "Using Modeled Sequences",
        "Vendor Portal",
        "Custom Access Validators",
        "Attribute Configuration",
        "Document Security",
        "Document Access",
        "Document Search",
        "Enabling the Use Cases",
        "Firewall/Proxy/VPN Access",
        "Groups and Users",
        "Vendor Portal Administration",
        "Linked Objects",
        "Materials",
        "Order Confirmation",
        "Products",
        "Vendor Portal Property Settings",
        "Quotes and Samples",
        "Vendor Access to Seasons, Colorways, and Products",
        "Setup and Configuration",
        "Troubleshooting",
        "Use Cases",
        "Vendor Object References",
        "Vendor Objects",
        "Analyzing Where Documents are Used",
        "Associating Document Versions",
        "Copying Objects with Associated Documents",
        "Version Control for Documents",
        "Enabling Version Control for Documents",
        "Version Control",
        "Linking to Versions of Revisable Entities",
        "Deleting Associated Document Versions",
        "Version Control for Revisable Entities",
        "Enabling Version Control for Revisable Entities",
        "Deleting Revisable Entity Versions",
        "Analyzing Where Revisable Entity Versions are Used",
        "Deleting Annotations",
        "Editing Annotations",
        "Viewing Annotations",
        "Accessing the Product Images Page",
        "Adding Image Markers",
        "Colorway Image Pages",
        "Configuration of 3D Collaboration",
        "Creating the Product Images Page",
        "Deleting AI Plugin File",
        "Image Markup Overview",
        "Image Page Actions and Information Icons",
        "About FlexPLM 3D Collaboration",
        "Viewing Product Images Page",
        "View Markup Image Pages",
        "Viewing Images in 3D View from Library and Browser",
        "About Annotation"
    ]
    ;

// Initialize MiniSearch CDN
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdn.jsdelivr.net/npm/minisearch@7.1.1/dist/umd/index.min.js';
document.head.appendChild(script);

// After the script is loaded, initialize MiniSearch
script.onload = function () {
    const miniSearch = new MiniSearch({
        fields: ['title'], // Fields to search in
        storeFields: ['title'], // Fields to display in results
        idField: 'id', // Specify the id field
        searchOptions: {
            fuzzy: 0.2 // Fuzzy matching threshold
        }
    });

    // Add documents (titles) to the search index
    const indexedTitles = titles.map((title, index) => ({
        id: index + 1,  // ID starts from 1
        title: title
    }));

    miniSearch.addAll(indexedTitles);



    //////////////////////////
    var box = document.createElement('div');
    box.style.width = '450px';
    box.style.height = '550px';
    box.style.backgroundColor = 'white'; // Light beige background
    box.style.border = '2px solid #123524'; // Deep green border
    box.style.position = 'fixed';
    box.style.bottom = '70px';
    box.style.right = '500px';
    box.style.display = 'none';
    box.style.borderRadius = '15px';
    box.style.fontFamily = 'Segoe UI';
    box.style.overflow = 'hidden';

    var header = document.createElement('h3');
    header.innerText = 'FLEXBOT HELP';
    header.style.textAlign = 'center';
    header.style.margin = '0 0';
    header.style.backgroundColor = '#85A947'; // Medium green background
    header.style.color = '#EFE3C2'; // Light beige text
    header.style.fontFamily = 'Segoe UI';
    header.style.fontWeight = 'normal';
    header.style.fontSize = '15px';
    header.style.padding = '10px';

    var chatScreen = document.createElement('div');
    chatScreen.style.flex = '1';
    chatScreen.style.overflowY = 'auto';
    chatScreen.style.height = '84%';
    chatScreen.style.fontSize = '15px';
    box.appendChild(chatScreen);

    var footer = document.createElement('div');
    footer.style.display = 'flex';
    footer.style.alignItems = 'center';
    footer.style.padding = '2px';

    var input = document.createElement('input');
    input.id = 'input';
    input.style.flex = '1';
    input.style.borderRadius = '15px';
    input.style.fontSize = '15px';
    input.style.display = 'flex';
    input.style.height = '20px';
    input.style.padding = '10px 5px';
    input.style.border = '1px solid #85A947'; // Olive green border

    var submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.innerText = 'Submit';
    submitButton.style.backgroundColor = '#85A947'; // Olive green
    submitButton.style.color = '#EFE3C2'; // Light beige text
    submitButton.style.padding = '10px 20px';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '10px';
    submitButton.style.cursor = 'pointer';
    submitButton.style.fontSize = '15px';
    submitButton.style.verticalAlign = 'middle';

    var toggleButton = document.createElement('button');
    toggleButton.innerText = 'Show/Hide Box';
    toggleButton.style.position = 'fixed';
    toggleButton.style.bottom = '20px';
    toggleButton.style.right = '10px';
    toggleButton.style.padding = '10px 20px';
    toggleButton.style.backgroundColor = '#123524'; // Deep green
    toggleButton.style.color = '#EFE3C2'; // Light beige text
    toggleButton.style.border = '2px solid #123524';
    toggleButton.style.borderRadius = '15px';
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.fontFamily = 'Segoe UI';

    toggleButton.onclick = function () {
        box.style.display = box.style.display === 'none' ? 'block' : 'none';
    };

    footer.appendChild(input);
    footer.appendChild(submitButton);
    box.appendChild(header);
    box.appendChild(chatScreen);
    box.appendChild(footer);
    document.body.appendChild(toggleButton);
    document.body.appendChild(box);

    async function fetchData() {
        const response = await fetch('https://hashcodes7.github.io/websiteChatbot/data.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }
    async function getResponse(input) {
        console.log('getresponse', input);
        const inputLower = input.toLowerCase();

        function searchObject(obj) {
            for (const key in obj) {
                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    const result = searchObject(obj[key]);
                    if (result) return result;
                } else if (key === 'title' && obj[key].toLowerCase() === inputLower) {
                    return obj.information;
                }
            }
            return null;
        }

        if (inputLower === "hi") {
            return "Hello! How can I help you?";
        } else {
            const data = await fetchData();

            const result = searchObject(data);
            console.log(result);
            return result ? result : "I'm not sure how to help with that.<br>";
        }
    }
    async function sendresponse() {
        console.log('sendresponse play');
        const usermessage = input.value;

        // Append user's message to the chat screen
        const userMessageElement = document.createElement('div');
        userMessageElement.innerHTML = `<span style="color: red;"><strong>You:</strong> </span>` + usermessage;
        chatScreen.appendChild(userMessageElement);
        console.log(usermessage);

        const searchTerm = usermessage.trim().toLowerCase(); // Make search term lowercase

        if (searchTerm) {
            // Search for matching results
            const results = miniSearch.search(searchTerm);

            // Filter results with score > 30
            const highScoreResults = results.filter(result => result.score > 30);

            if (highScoreResults.length > 0) {
                // Display system message for high-score results
                const systemMessageElement = document.createElement('div');
                systemMessageElement.innerHTML = `<span style="color: blue;"><strong>FlexBot:</strong> </span>`;

                const matchesList = document.createElement('div'); // Create a new container for results
                highScoreResults.forEach(result => {
                    const listItem = document.createElement('div');
                    listItem.style.backgroundColor = '#E0F7FA';
                    listItem.style.border = '1px solid #00ACC1';
                    listItem.style.borderRadius = '10px';
                    listItem.style.padding = '10px';
                    listItem.style.marginBottom = '5px';

                    listItem.textContent = `${result.title} (Score: ${result.score.toFixed(2)})`;

                    // Create extra info and append it initially
                    const extraInfo = document.createElement('div');
                    extraInfo.classList.add('extra-info');
                    extraInfo.textContent = 'Loading...'; // Show loading text initially
                    listItem.appendChild(extraInfo);

                    // Fetch and display the actual response immediately
                    (async () => {
                        try {
                            const response = await getResponse(result.title);
                            extraInfo.textContent = response; // Update with the actual response
                        } catch (error) {
                            console.error('Error fetching response:', error);
                            extraInfo.textContent = 'Error fetching additional information.';
                        }
                    })();

                    matchesList.appendChild(listItem);
                });
                systemMessageElement.style.backgroundColor = '#E0F7FA';
                systemMessageElement.appendChild(matchesList);
                chatScreen.appendChild(systemMessageElement);


                // chatScreen.appendChild(matchesList);
            } else if (results.length > 0) {
                const systemMessageElement = document.createElement('div');
                systemMessageElement.innerHTML = `<span style="color: blue;"><strong>Chatbot:</strong> </span>Could not find an exact match for the query, here are related options:`;
                chatScreen.appendChild(systemMessageElement);

                // Display all results if no high-score results are found
                const matchesList = document.createElement('div'); // Create a new container for results

                // Limit results to the first 10 items
                results.slice(0, 10).forEach(result => {
                    const listItem = document.createElement('div');
                    listItem.style.backgroundColor = '#E0F7FA';
                    listItem.style.border = '1px solid #00ACC1';
                    listItem.style.borderRadius = '10px';
                    listItem.style.padding = '10px';
                    listItem.style.marginBottom = '5px';
                    listItem.style.color = '#00796B'; // Add font color

                    listItem.textContent = `${result.title} (Score: ${result.score.toFixed(2)})`;

                    // Add click event listener to toggle extra information
                    listItem.addEventListener('click', async () => {
                        const existingExtraInfo = listItem.querySelector('.extra-info');

                        if (existingExtraInfo) {
                            listItem.removeChild(existingExtraInfo); // Hide extra info
                        } else {
                            const extraInfo = document.createElement('div');
                            extraInfo.style.color = 'black';
                            extraInfo.classList.add('extra-info');
                            extraInfo.textContent = 'Loading...'; // Show loading text initially
                            listItem.appendChild(extraInfo);

                            try {
                                const response = await getResponse(result.title);
                                extraInfo.textContent = response; // Update with actual response
                            } catch (error) {
                                console.error('Error fetching response:', error);
                                extraInfo.textContent = 'Error fetching additional information.';
                            }
                        }
                    });

                    matchesList.appendChild(listItem);
                });
                systemMessageElement.style.backgroundColor = '#E0F7FA';
                systemMessageElement.appendChild(matchesList);
                chatScreen.appendChild(systemMessageElement);

            } else {
                // Display system message for no results
                const systemMessageElement = document.createElement('div');
                systemMessageElement.innerHTML = `<span style="color: blue;"><strong>Chatbot:</strong> </span>No results found for your query.`;
                chatScreen.appendChild(systemMessageElement);
            }
        } else {
            // Display system message for empty input
            const systemMessageElement = document.createElement('div');
            systemMessageElement.innerHTML = `<span style="color: blue;"><strong>Chatbot:</strong> </span>Please enter a search term.`;
            chatScreen.appendChild(systemMessageElement);
        }

        // Clear the input box after processing
        input.value = '';
        console.log('end');
        chatScreen.scrollTop = chatScreen.scrollHeight;
    }

    submitButton.addEventListener('click', sendresponse);
};
