### README: Scalable Presentation Website

#### Overview
This project is a scalable presentation website designed to display a series of slides with accompanying modals for additional information (referred to as "artifacts"). The slides and modals are dynamically generated using JSON data, allowing for easy expansion and customization.

#### Features
- **Dynamic Slides and Modals:** The website dynamically generates slides and modals from JSON data, making it highly customizable and scalable.
- **Navigation:** Users can navigate through slides using "Previous" and "Next" buttons.
- **Interactive Artifacts:** Each slide can contain artifacts, which open in modals when clicked, providing additional information or links.
- **Responsive Design:** The site is responsive and adjusts to different screen sizes.

### Site Map

1. **Home (index.html)**
   - **Slide Container**: Displays the current slide with title, content, and any associated images or artifact buttons.
   - **Navigation Buttons**: "Previous" and "Next" buttons for slide navigation.
   - **Modals Container**: Holds the dynamically generated modals for each artifact on the current slide.

### JSON Structure

#### Slides JSON (`slides.json`)
This JSON file contains the data for all slides in the presentation.

```json
[
    {
        "title": "Introduction to AI Art",
        "content": [
            "What is AI Art?",
            "History of AI in creative fields",
            "Major breakthroughs in the 2020s"
        ],
        "images": [
            { "src": "https://via.placeholder.com/150", "alt": "Sample Image 1" },
            { "src": "https://via.placeholder.com/150", "alt": "Sample Image 2" }
        ],
        "artifacts": [
            {
                "id": "artifact-1",
                "title": "First AI-Generated Artwork Auctioned",
                "content": "In 2018, Christie's auctioned 'Edmond de Belamy' for $432,500.",
                "links": [
                    { "text": "Read more on Christie's", "url": "https://www.christies.com" }
                ]
            }
        ]
    },
    {
        "title": "How AI Generates Art",
        "content": [
            "Text-to-Image Models",
            "GANs vs Diffusion Models",
            "Training datasets like LAION-5B"
        ],
        "images": [
            { "src": "https://via.placeholder.com/150", "alt": "Sample Image 3" },
            { "src": "https://via.placeholder.com/150", "alt": "Sample Image 4" }
        ]
    }
    // Additional slides can be added here
]
```

#### Artifacts/Modals JSON (`artifacts.json`)
This JSON file contains detailed information about each artifact/modal referenced in the slides.

```json
[
    {
        "id": "artifact-1",
        "title": "First AI-Generated Artwork Auctioned",
        "content": "In 2018, Christie's auctioned 'Edmond de Belamy' for $432,500. It was the first AI-generated artwork sold at a major auction, sparking debates over AI's role in art, originality, and authorship.",
        "links": [
            { "text": "Read more on Christie's", "url": "https://www.christies.com" },
            { "text": "ISIS Magazine", "url": "https://isismagazine.org.uk/2019/03/art-ificial-intelligence-the-curious-case-of-edmond-de-belamy/" },
            { "text": "The Guardian", "url": "https://www.theguardian.com/artanddesign/shortcuts/2018/oct/26/call-that-art-can-a-computer-be-a-painter" }
        ]
    },
    {
        "id": "artifact-2",
        "title": "Jason Allen's 'Théâtre D'opéra Spatial' Controversy",
        "content": "In 2022, Jason Allen's AI-generated artwork, 'Théâtre D'opéra Spatial,' won first place in the digital arts category at the Colorado State Fair. The win sparked debates over AI's role in art, leading to new rules requiring AI use disclosure and a U.S. Copyright Office ruling denying copyright protection.",
        "links": [
            { "text": "Smithsonian Magazine", "url": "https://www.smithsonianmag.com/smart-news/this-state-fair-changed-its-rules-after-a-piece-made-with-ai-won-last-year-180982867/" },
            { "text": "Washington Post", "url": "https://www.washingtonpost.com/technology/2022/09/02/midjourney-artificial-intelligence-state-fair-colorado/" },
            { "text": "CNN", "url": "https://www.cnn.com/2022/09/03/tech/ai-art-fair-winner-controversy/index.html" },
            { "text": "ArtNews", "url": "https://www.artnews.com/art-news/news/ai-generated-artwork-colorado-state-fair-copyright-decision-1234679341/" }
        ]
    }
    // Additional artifacts can be added here
]
```

### How It Works

1. **Loading the Slides**:
    - The slides are dynamically loaded from the `slides.json` file.
    - Each slide's title, content, and any associated images or artifact buttons are generated based on this data.
  
2. **Loading the Artifacts**:
    - When a slide includes artifact buttons, corresponding modals are created from the `artifacts.json` file.
    - The modals contain detailed information, including text content and clickable links.

3. **Navigation**:
    - Users can navigate through the slides using the "Previous" and "Next" buttons.
    - The slide content updates dynamically based on the current slide index.

4. **Interacting with Artifacts**:
    - Clicking on an artifact button opens a modal with more detailed information.
    - Modals can include text content, images, and clickable links to external resources.
    - Users can close the modal by clicking the close button.

### Plan for Success

1. **Initial Setup**:
   - Start by building the basic HTML, CSS, and JavaScript structure.
   - Ensure that the JSON files (`slides.json` and `artifacts.json`) are properly formatted and included in the project directory.

2. **Content Creation**:
   - Create detailed slide content, focusing on clarity and visual appeal.
   - Populate the artifacts with relevant and informative content, including images and links to further reading.

3. **Testing**:
   - Test the navigation to ensure all slides are accessible and display correctly.
   - Verify that all modals open and close properly, and that links work as expected.
   - Test on multiple devices and browsers to ensure responsiveness and compatibility.

4. **Expansion**:
   - As the project grows, add more slides and artifacts to the JSON files.
   - Update the script to handle larger datasets efficiently, potentially adding features like search or filtering.

5. **User Feedback**:
   - Gather feedback from users to improve the interface and content.
   - Continuously update the presentation based on new developments and user input.

6. **Deployment**:
   - Deploy the website on a reliable hosting platform.
   - Optimize loading times by compressing images and minifying code.

By following this plan, the project can scale effectively while maintaining a clean, user-friendly interface. The use of JSON for content management allows for easy updates and expansion, making the presentation a versatile tool for a wide range of topics.
