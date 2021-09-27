# Noelle and Nick Team notes

## Week of 9/13:

* Nick: Lead Dev and Accessibility
* Noelle: CSS Styling and Transitions Designer, and Navigation Specialist

* Noelle and Nick communicated over group chat on Friday 9/17 and Sunday 9/19 for around one hour as they coordinated research on how to support each of the 4 button states, as well as with troubleshooting regarding accessibility navigation. 
* We collaborated over Zoom on 9/19 for one hour to share our progress and discuss specific CSS implementations for our hover styling. We also worked to resolve our merge conflicts. We also communicated with Nicole and Bailey to troubleshoot and discuss how we each designed our implementation to best reflect the model teuxdeux CTA button.


## Week of 9/21:
* 9/21: Today, we realized that we could make our button implementation more extensible while having cleaner code and better accessibility handling. 
* Our next steps are to:
  1. Remove disabled checkbox in component, instead build this into demo and Storybook support as a component attribute.
  2. Resolve accesibility errors identified by Storybook.
  3. Implement support for multiple color variations

* 9/26: We each took the time to watch the instructional recap video send out detailing how to refine our CSS styling and variables to better support the cascade, and how to establish properties for custom theming such as supporting a Dark Mode.
  * Specifically, we:
    * Built out the demo to show separate buttons representing different state and properties (Normal, Disabled, Dark theme) to improve the demo and remove the unnecessary checkbox toggle
    * We communicated primarily over text messaging and Zoom calls, and used this time to overcome code and merge conflicts, and discuss how we wanted to design the dark mode to support an accessible contrast variation.
      * Nick worked to lead the implementation of the improvements we have previously discussed.
      * Noelle researched further into Lit and also made more in-depth property changes to her button to gain a better understanding of how state changes affected the button's behavior and styling up the tree. She also learned how to appropriately leverage conditional rendering to populate and control icons appearing on her button.