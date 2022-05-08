#include <iostream>
#include <string>
#include <fstream>
#include <iomanip>

using namespace std;

const int MAX = 10;

string NAME[MAX] = {};
string ID[MAX] = {};
string empID;

void OpenFile() {
	string line;
	ifstream myfile("D:\\employee.txt");//save D drive
	if (myfile.is_open()) {
		int x = 0;
		while (getline(myfile, line)) {
			int length = line.length();
			ID[x] = line.substr(0, 3);
			NAME[x] = line.substr(4, length -4);
			x++;
		}
	}
	else {
		cout << "file can not open!" << endl;
	}
}


void AddRecord() {
	char name[50];
	char empno[6];

	bool flag = true;

	while (flag) {
		cin.ignore(); //ignore enrer key
		cout << "Employee ID. ";
		cin.getline(empno, 6);
		for (int i = 0; i < MAX; i++)
		{
			cout << ID[i] << "EMPLOYEE NO" << endl;
			if (ID[i] == empno) {
				cout << "sorry, already have this Employee ID" << endl;
				//cin.ignore(); //ignore enrer key
				flag;
			}
			else {
				flag = false;
			}
		}
	}
		cout << "Employee Name. ";
		cin.getline(name, 50);
		flag;
		
	for (int x = 0; x < MAX; x++) {
		if (ID[x] == "\0") {
			ID[x] = empno;
			NAME[x] = name;
		}
	}	
}

void ListRecord() {
	system("CLS");
	cout << "Current Record(s)" << endl;
	cout << "==============================" << endl;
	int counter = 0;
	cout << " No. |   ID  |     NAME    " << endl;
	cout << "---------------------------" << endl;
	for (int x = 0; x < MAX; x++) {
		if (ID[x] != "\0") {
			counter++;
		
			cout << setfill(' ') << setw(6) << left<<counter;
			cout << "  "<< setfill(' ') << setw(7) << ID[x];
			cout << " "<< setfill(' ') << setw(7) << NAME[x] << endl;
		}
	}
	if (counter == 0)
	{
		cout << endl;
		cout << "No Record found! " << endl;
		cout << endl;
	}
}

void SearchRecord(string search) {
	system("CLS");
	cout << "Current Record(s)" << endl;
	cout << "==============================" << endl;
	int counter = 0;
	for (int x = 0; x < MAX; x++)
	{
		
		if (ID[x] == search) {
			counter++;
			cout << "  " << counter << "    " << ID[x] << "           " << NAME[x] << endl;
			break;
		}
	}
}

void UpdateRecore(string search) {
	char name[50];
	char empno[5];
	int counter = 0;

	for (int x = 0; x < MAX; x++)
	{
		if (ID[x] == search) {
			counter++;
			cout << "Employee No. ";
			cin.getline(name, 50);

			NAME[x] = name;
			cout << "Update Successfull!" << endl;
			break;
		}
	}

	if (counter == 0) {
		cout << "ID Does not exist!" << endl;
	}


}

void DeleteRecord(string search) {
	int counter = 0;
	for (int x = 0; x < MAX; x++)
	{
		if (ID[x] == search)
		{
			counter++;
			NAME[x] = "";
			ID[x] = "";

			cout << "Successfully Delete!" << endl;
			break;

		}

	}

}

void SaveToFile() {
	ofstream myfile;
	myfile.open("D:\\employee.txt");
	for (int x = 0; x < MAX; x++)
	{
		if (ID[x] == "\0") {
			break;
		}
		else {
			myfile << ID[x] + "," + NAME[x]<< endl; 
		}
	}
}

int main() {
	
	cout << "\n EMPLOYEE LIST" << endl;
	cout << "==============================" << endl;
	int option;
	OpenFile();

	do {
		cout << "1. Create Records" << endl;
		cout << "2. Update Records" << endl;
		cout << "3. Delete Records" << endl;
		cout << "4. Search Records" << endl;
		cout << "5. Display all Records" << endl;
		cout << "6. Exit and Save to Textfile" << endl;
		cout << "==============================" << endl;
		cout << "Select Option >> ";
		cin >> option;

		switch (option)
		{  
		case 1: AddRecord();
			cout << "Create Successfully! \n\n";
			cout << endl;
			//system("CLS");
			break;


		case 2:
			cin.ignore();
			cout << " Search by ID >>";
			getline(cin, empID);
			UpdateRecore(empID);
		//	system("CLS");
			break;

		case 3:
			cin.ignore();
			cout << "Delete by ID >>";
			getline(cin, empID);
			DeleteRecord(empID);
			cin.ignore();
			system("CLS");
			break;

		case 4:
			cin.ignore(); //ignore enrer key
			cout << " Search by ID >>";
			getline(cin, empID);
			SearchRecord(empID);
			break;


		case 5: ListRecord();
			break;
		}


	} while (option != 6);
	SaveToFile();
	cout << "Exit, Saving to File!" << endl;
	return 0;
}
