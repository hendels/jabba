#### commands:
* sudo updatedb - update files on pc to db
* locate:
    * locate przemy - looks for file which contains przemy word inside
    * locate -c przemy - counter for searched word
* find 
    * find . -name "*przemy*" [while in specific folder cd Downloads f.e.]
    * find ~/ -name "*przemy*" [search home folder]
    * find ~/ -iname "*przemy*" [search for file with no regards to letter case]
    * find ~/ -size -5M -and -size +2M [self explained]
    * find ~/ -size -5M [less than 5MB]
    * find ~/ -amin -3 [file accessed 3 minutes ago]
    * find ~/ -amin -30 [file accessed 30 minutes ago]
    * find ~/ -time -2 [file accessed 2 days ago ago]
 
