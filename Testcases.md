# cypress_kiwiapp

The following test cases have been automated for www.kiwi.com website:

1. Search for a flight - from the default location to single destination, anytime

<<<<<<< HEAD
| # | **Test Step**                                       | **Expected**                               |
|---|-----------------------------------------------------|--------------------------------------------|
| 1 | Access the www.kiwi.com website                     | The website is accessed                    |
| 2 | Uncheck the "Booking.com" checkbox                  | The checkbox is unchecked                  |
| 3 | Leave the default Departure field location selected | The default remains selected               |
| 4 | Click the Destination autocomplete field            | The autocomplete field gets expanded       |
| 5 | Type in the desired destination                     | The autocomplete returns relevant results  |
| 6 | Click the first returned result                     | The result gets selected                   |
| 7 | Leave the "Departure" and "Return" dates unchanged  | Both fields display the value "Anytime"    |
| 8 | Click the "Search" button                           | The search process starts showing results  |
--------------------------------------------------------------------------------------------------------
=======
| # | **Test Step**                                       | **Expected**                                |
|---|-----------------------------------------------------|---------------------------------------------|
| 1 | Access the www.kiwi.com website                     | The website is accessed                     |
| 2 | Uncheck the "Booking.com" checkbox                  | The checkbox is unchecked                   |
| 3 | Leave the default Departure field location selected | The default remains selected                |
| 4 | Click the Destination autocomplete field            | The autocomplete field gets expanded        |
| 5 | Type in the desired destination                     | The autocomplete returns relevant results   |
| 6 | Click the first returned result                     | The result gets selected                    |
| 7 | Leave the "Departure" and "Return" dates unchanged  | Both fields display the value "Anytime"     |
| 8 | Click the "Search" button                           | The search process starts showing results   |
---------------------------------------------------------------------------------------------------------
>>>>>>> afdb647de257bd6a2df50280cfcca26e1486e58d

2. Search for a flight - from the default location to single destination, preferred dates

| # | **Test Step**                                       | **Expected**                                |
|---|-----------------------------------------------------|---------------------------------------------|
| 1 | Access the www.kiwi.com website                     | The webpage is accessed                     |
| 2 | Uncheck the "Booking.com" checkbox                  | The checkbox is unchecked                   |
| 3 | Leave the default Departure field location selected | The default remains selected                |
| 4 | Click the Destination autocomplete field            | The autocomplete field gets expanded        |
| 5 | Type in the desired destination                     | The autocomplete returns relevant results   |
| 6 | Click the first returned result                     | The result gets selected                    |
| 7 | Click the Departure calendar                        | The calendar is displayed                   |
| 8 | Select the last day of the next month               | The last day of the next month is selected  |
| 9 | Click the "Search" button                           | The search process starts showing results   |
---------------------------------------------------------------------------------------------------------

3. Search for a flight - from the default location to multiple destinations, anytime

<<<<<<< HEAD
| # | **Test Step**                                       | **Expected**                               |
|---|-----------------------------------------------------|--------------------------------------------|
| 1 |Access the www.kiwi.com website                      | The webpage is accessed                    |
| 2 | Uncheck the "Booking.com" checkbox                  | The checkbox is unchecked                  |
| 3 | Leave the default Departure field location selected | The default remain selected                |
| 4 | Click the Destination autocomplete field            | The autocomplete field gets expanded       |
| 5 | Type in the first destination                       | The afferent results get displayed         |
| 6 | Click the first result from the list                | The first destination gets selected        |
| 7 | Type in the second destination                      | The afferent results get displayed         |
| 8 | Click the second result from the list               | The second destination gets selected       |
| 9 | Click the "Search" button                           | The search process starts showing results  | --------------------------------------------------------------------------------------------------------

4. Search for a flight - from new location, anytime

| # | **Test Step**                                       | **Expected**                               |
|---|-----------------------------------------------------|--------------------------------------------|
| 1 | Access the www.kiwi.com website                     | The website is accessed                    |
| 2 | Uncheck the "Booking.com" checkbox                  | The checkbox is unchecked                  |
| 3 | Remove the default departure location selected      | The default departure location is removed  |
| 4 | Type in the new desired departure location          | The autocomplete returns relevand results  |
| 5	| Click the first returned result    			      | The result gets selected	     		   |
| 6 | Click the Destination autocomplete field            | The autocomplete field gets expanded       |
| 7 | Type in the desired destination                     | The autocomplete returns relevant results  |
| 8 | Click the first returned result                     | The result gets selected                   |
| 9 | Leave the "Departure" and "Return" dates unchanged  | Both fields display the value "Anytime"    |
| 10 | Click the "Search" button                          | The search process starts showing results  |
--------------------------------------------------------------------------------------------------------

5. Search for a flight - from new location, preferred dates

| # | **Test Step**                                       | **Expected**                               |
|---|-----------------------------------------------------|--------------------------------------------|
| 1 | Access the www.kiwi.com website                     | The website is accessed                    |
| 2 | Uncheck the "Booking.com" checkbox                  | The checkbox is unchecked                  |
| 3 | Remove the default departure location selected      | The default departure location is removed  |
| 4 | Type in the new desired departure location          | The autocomplete returns relevand results  |
| 5	| Click the first returned result    			      | The result gets selected				   |
| 6 | Click the Destination autocomplete field            | The autocomplete field gets expanded       |
| 7 | Type in the desired destination                     | The autocomplete returns relevant results  |
| 8 | Click the first returned result                     | The result gets selected                   |
| 9 | Click the Departure calendar                        | The calendar is displayed                  |
| 10 | Select the last day of the next month              | The last day of the next month is selected |
| 11 | Click the "Search" button                          | The search process starts showing results  |
--------------------------------------------------------------------------------------------------------
=======
| # | **Test Step**                                       | **Expected**                                |
|---|-----------------------------------------------------|---------------------------------------------|
| 1 |Access the www.kiwi.com website                      | The webpage is accessed                     |
| 2 | Uncheck the "Booking.com" checkbox                  | The checkbox is unchecked                   |
| 3 | Leave the default Departure field location selected | The defaults remain selected                |
| 4 | Click the Destination autocomplete field            | The autocomplete field gets expanded        |
| 5 | Type in the first destination                       | The afferent results get displayed          |
| 6 | Click the first result from the list                | The first destination gets selected         |
| 7 | Type in the second destination                      | The afferent results get displayed          |
| 8 | Click the second result from the list               | The second destination gets selected        |
| 9 | Click the "Search" button                           | The search process starts showing results   |
---------------------------------------------------------------------------------------------------------

4. Search for a flight - from new location, anytime

| # | **Test Step**                                       | **Expected**                                |
|---|-----------------------------------------------------|---------------------------------------------|
| 1 | Access the www.kiwi.com website                     | The website is accessed                     |
| 2 | Uncheck the "Booking.com" checkbox                  | The checkbox is unchecked                   |
| 3 | Remove the default departure location selected      | The default departure location is removed   |
| 4 | Type in the new desired departure location          | The autocomplete returns relevant results   |
| 5	| Click the first returned result                     | The result gets selected                    |
| 6 | Click the Destination autocomplete field            | The autocomplete field gets expanded        |
| 7 | Type in the desired destination                     | The autocomplete returns relevant results   |
| 8 | Click the first returned result                     | The result gets selected                    |
| 9 | Leave the "Departure" and "Return" dates unchanged  | Both fields display the value "Anytime"     |
| 10 | Click the "Search" button                          | The search process starts showing results   |
---------------------------------------------------------------------------------------------------------

5. Search for a flight - from new location, preferred dates

| # | **Test Step**                                       | **Expected**                                |
|---|-----------------------------------------------------|---------------------------------------------|
| 1 | Access the www.kiwi.com website                     | The website is accessed                     |
| 2 | Uncheck the "Booking.com" checkbox                  | The checkbox is unchecked                   |
| 3 | Remove the default departure location selected      | The default departure location is removed   |
| 4 | Type in the new desired departure location          | The autocomplete returns relevant results   |
| 5	| Click the first returned result    			      | The result gets selected                    |
| 6 | Click the Destination autocomplete field            | The autocomplete field gets expanded        |
| 7 | Type in the desired destination                     | The autocomplete returns relevant results   |
| 8 | Click the first returned result                     | The result gets selected                    |
| 9 | Click the Departure calendar                        | The calendar is displayed                   |
| 10 | Select the last day of the next month              | The last day of the next month is selected  |
| 11 | Click the "Search" button                          | The search process starts showing results   |
---------------------------------------------------------------------------------------------------------
>>>>>>> afdb647de257bd6a2df50280cfcca26e1486e58d
