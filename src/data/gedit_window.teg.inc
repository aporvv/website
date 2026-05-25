!e div window_container
!e div window

!e div titlebar

!e div buttons
![close](data/assets/close.png)
![max](data/assets/maximize.png)
![min](data/assets/minimize.png)
!e div buttons

!e div win_title
mainpage (~/site) - gedit
!e div win_title
!e div titlebar

!e div menubar
File Edit View Search Tools Documents Help
!e div menubar

!e div actionbar
![new](data/assets/document-new.svg)
![open](data/assets/document-open.svg)
!e div hide_on_mobile
Open
!e div hide_on_mobile
![drop](data/assets/dropdown.svg)
![save](data/assets/document-save.svg)
!e div hide_on_mobile
Save
!e div hide_on_mobile
==![sep](data/assets/separator.svg)
!eoc img hide_on_mobile src="data/assets/separator.svg"
![print](data/assets/document-print.svg)
==![sep](data/assets/separator.svg)
!eoc img hide_on_mobile src="data/assets/separator.svg" 
![undo](data/assets/edit-undo.svg)
!e div hide_on_mobile
Undo
!e div hide_on_mobile
![redo](data/assets/edit-redo.svg)
==![sep](data/assets/separator.svg)
!eoc img hide_on_mobile src="data/assets/separator.svg" 
![cut](data/assets/edit-cut.svg)
![copy](data/assets/edit-copy.svg)
![paste](data/assets/edit-paste.svg)
==![sep](data/assets/separator.svg)
!eoc img hide_on_mobile src="data/assets/separator.svg" 
![find](data/assets/edit-find.svg)
![replace](data/assets/edit-find-replace.svg)

!e div actionbar

!e div tab_container
!e a _ href="#home" class="tab-link link-home"
![icon](data/assets/text-x-preview.svg)
Home
![close](data/assets/window-close.svg)
!e a _

!e a _ href="#about" class="tab-link link-about"
![icon](data/assets/text-x-preview.svg)
About
![close](data/assets/window-close.svg)
!e a _
!e div tab_container

!e div content-container

!inc contents/home_content.teg.inc
!inc contents/about_content.teg.inc

!e div content-container

!e div infobar
Plaintext
![dark](data/assets/dropdown-dark.svg)
Tab Width: 4
![dark](data/assets/dropdown-dark.svg)
!eoc div info_spacer
Ln 0, Col 0
!eoc div info_spacer
INS
!e div infobar

!e div window
!e div window_container
