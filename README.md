# Node.js Projects Collection

This repository contains a collection of Node.js applications demonstrating various functionalities including RSS parsing, email sending via AWS SES, and CSV to JSON conversion using PapaParse.

## 📁 Project Structure

```
PROJECTS-NODEJS/
├── README.md                                    # This documentation file
├── run_this_for_nodejs_programs.sh            # Shell script for project management
├── app01-rss-parser/                          # RSS feed parser application
├── app02-sendEmailSES/                        # AWS SES email sender application
└── convert-csv-to-json-using-papaparse/       # CSV to JSON converter application
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 12 or higher)
- **npm** (Node Package Manager)
- **AWS Account** (for SES email functionality)
- **Environment Variables** properly configured (see individual project sections)

### Quick Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd PROJECTS-NODEJS
   ```

2. **Make the shell script executable:**
   ```bash
   chmod +x run_this_for_nodejs_programs.sh
   ```

3. **Run the interactive project manager:**
   ```bash
   ./run_this_for_nodejs_programs.sh
   ```

## 📋 Projects Overview

### 1. RSS Parser Application (`app01-rss-parser/`)

**Purpose:** Fetches and parses RSS feeds to extract article information including titles, links, publication dates, and descriptions.

#### Features:
- Parses RSS feeds from any valid RSS URL
- Extracts custom fields including descriptions
- Displays formatted output with numbered entries
- Built using the `rss-parser` library

#### Dependencies:
```json
{
  "rss-parser": "^3.12.0"
}
```

#### Configuration:
- **Target RSS Feed:** Currently configured to parse `https://www.mygingergarlickitchen.com/index.xml`
- **Custom Fields:** Configured to extract `description` field from items

#### Usage:
```bash
cd app01-rss-parser
npm install
node index.js
```

#### Expected Output:
```
My Ginger Garlic Kitchen
1 =========================
TITLE: [Article Title]
LINK: [Article URL]
PUB_DATE: [Publication Date]
DESCRIPTION: [Article Description]
```

#### Code Explanation:
- **Parser Configuration:** Sets up custom fields to extract descriptions
- **Async Operation:** Uses async/await for non-blocking RSS feed fetching
- **Data Processing:** Iterates through feed items and displays formatted information

---

### 2. AWS SES Email Sender (`app02-sendEmailSES/`)

**Purpose:** Sends bulk emails using Amazon Simple Email Service (SES) with NodeMailer integration for efficient email delivery.

#### Features:
- Bulk email sending with rate limiting (50 messages/second)
- AWS SES integration for reliable email delivery
- Environment variable configuration for security
- Email tagging for tracking and analytics
- Automatic credential management using AWS SDK

#### Dependencies:
```json
{
  "@aws-sdk/client-ses": "^3.46.0",
  "aws-sdk": "^2.1053.0",
  "nodemailer": "^6.7.5"
}
```

#### Required Environment Variables:
```bash
# Comma-separated list of recipient email addresses
AWS_TEST_EMAILID="email1@example.com,email2@example.com,email3@example.com"

# Verified sender email address in AWS SES
AWS_SEND_FROM_EMAILID="sender@yourdomain.com"

# AWS credentials (alternatively use AWS CLI configuration)
AWS_ACCESS_KEY_ID="your_access_key"
AWS_SECRET_ACCESS_KEY="your_secret_key"
```

#### AWS SES Setup Requirements:
1. **AWS Account:** Active AWS account with SES enabled
2. **Email Verification:** Sender email must be verified in AWS SES
3. **Region Configuration:** Currently set to `us-east-1`
4. **SES Limits:** Ensure your account is out of sandbox mode for production use

#### Usage:
```bash
cd app02-sendEmailSES
npm install
# Set environment variables
export AWS_TEST_EMAILID="recipient1@example.com,recipient2@example.com"
export AWS_SEND_FROM_EMAILID="sender@yourdomain.com"
node app02-sendEmailSES.js
```

#### Expected Output:
```
*****************************
{ from: 'sender@yourdomain.com', to: [ 'recipient@example.com' ] }
SUCCESS => 01000174c5e48e6c-a1b2c3d4-e5f6-7890-abcd-ef1234567890-000000
```

#### Security Features:
- **Environment Variables:** Sensitive data stored in environment variables
- **AWS SDK Integration:** Secure credential management
- **Rate Limiting:** Prevents overwhelming email servers

---

### 3. CSV to JSON Converter (`convert-csv-to-json-using-papaparse/`)

**Purpose:** Converts multiple CSV files into a single combined JSON file using PapaParse library, with data processing and HTML link generation.

#### Features:
- **Multi-file Processing:** Combines multiple CSV files into one
- **CSV to JSON Conversion:** Efficient parsing using PapaParse
- **Data Validation:** Error handling for malformed data
- **HTML Generation:** Creates HTML anchor tags from data
- **File Management:** Organized input/output directory structure

#### Dependencies:
```json
{
  "papaparse": "^5.3.1"
}
```

#### Required Environment Variables:
```bash
# Base directory path for the Node.js repository
REPO_NODEJS="/path/to/your/PROJECTS-NODEJS"
```

#### Directory Structure:
```
convert-csv-to-json-using-papaparse/
├── convertCsvToJsonMain.js          # Main application file
├── package.json                     # Dependencies configuration
├── data_input/                      # Input CSV files directory
│   ├── category1.csv               # Sample CSV file (Books)
│   └── category2.csv               # Sample CSV file (Journals)
└── data_output/                     # Generated output files
    ├── combinedFinalFile.csv       # Combined CSV file
    └── combinedFinalFile.json      # Final JSON output
```

#### CSV Data Format:
The application expects CSV files with the following columns:
- **CONTENT TYPE:** Category (Books, Journals, etc.)
- **TITLE:** Publication title
- **ABBR:** Abbreviated title
- **ISSN:** International Standard Serial Number
- **e-ISSN:** Electronic ISSN
- **PUBLICATION RANGE: START:** Starting publication date
- **PUBLICATION RANGE: LATEST PUBLISHED:** Latest publication date
- **SHORTCUT URL:** Direct access URL
- **ARCHIVE URL:** Archive URL

#### Usage:
```bash
cd convert-csv-to-json-using-papaparse
npm install
# Set environment variable
export REPO_NODEJS="/path/to/your/PROJECTS-NODEJS"
node convertCsvToJsonMain.js
```

#### Process Flow:
1. **File Concatenation:** Combines all CSV files in `data_input/` into one file
2. **CSV Parsing:** Uses PapaParse to convert CSV to JavaScript objects
3. **JSON Generation:** Writes parsed data to JSON file
4. **HTML Generation:** Creates HTML anchor tags for each record
5. **Output:** Displays processed data and record count

#### Expected Output:
```
==========================================
Complete 8 records.
==========================================
[Array of parsed CSV data objects]
==========================================
file written successfully
==========================================
<a href="Books">ACM Comput. Surv.</a>
<a href="Journals">ACM J. Comput. Doc.</a>
...
```

---

## 🛠️ Shell Script Utility (`run_this_for_nodejs_programs.sh`)

**Purpose:** Interactive shell script for managing Node.js projects within the repository.

#### Features:
- **Project Creation:** Automated Node.js project initialization
- **App Execution:** Interactive app selection and execution
- **Git Integration:** Automatic .gitignore setup for Node.js projects
- **Directory Management:** Organized project structure creation

#### Functions:

##### 1. Create Node.js App
- Prompts for project name
- Creates project directory
- Initializes npm package (`npm init -y`)
- Downloads Node.js .gitignore from GitHub
- Creates basic `index.js` with "Hello, World!" template
- Lists created project contents

##### 2. Run Node.js App Locally
- Uses `fd` and `fzf` for interactive file selection
- Allows execution of any JavaScript file in the repository
- Provides fuzzy search functionality for quick file access

#### Dependencies:
- **fd:** Fast file finder (must be installed separately)
- **fzf:** Command-line fuzzy finder (must be installed separately)

#### Usage:
```bash
./run_this_for_nodejs_programs.sh
```

#### Environment Variables:
```bash
# Set the repository path
export REPO_NODEJS="/path/to/your/PROJECTS-NODEJS"
```

---

## 🔧 Environment Configuration

### Required Environment Variables

Create a `.env` file or set these variables in your shell:

```bash
# For CSV to JSON converter
export REPO_NODEJS="/absolute/path/to/PROJECTS-NODEJS"

# For AWS SES email sender
export AWS_TEST_EMAILID="email1@domain.com,email2@domain.com"
export AWS_SEND_FROM_EMAILID="verified-sender@yourdomain.com"

# AWS Credentials (if not using AWS CLI)
export AWS_ACCESS_KEY_ID="your_access_key_id"
export AWS_SECRET_ACCESS_KEY="your_secret_access_key"
export AWS_REGION="us-east-1"
```

### AWS SES Configuration

1. **Verify Email Addresses:**
   ```bash
   # Using AWS CLI
   aws ses verify-email-identity --email-address sender@yourdomain.com
   ```

2. **Check Verification Status:**
   ```bash
   aws ses get-identity-verification-attributes --identities sender@yourdomain.com
   ```

3. **Request Production Access:** Remove sandbox limitations for production use

---

## 📝 Development Notes

### Code Conventions
- **Error Handling:** All applications include try-catch blocks for robust error management
- **Async Programming:** Uses modern async/await patterns where applicable
- **Environment Security:** Sensitive data stored in environment variables
- **Modular Design:** Each project is self-contained with its own dependencies

### Testing
Currently, test scripts are placeholder implementations. To add comprehensive testing:

1. **Install Testing Framework:**
   ```bash
   npm install --save-dev jest
   ```

2. **Update package.json:**
   ```json
   {
     "scripts": {
       "test": "jest"
     }
   }
   ```

### Performance Considerations
- **RSS Parser:** Handles large feeds efficiently with streaming
- **Email Sender:** Rate-limited to prevent API throttling
- **CSV Converter:** Processes large CSV files using streams

---

## 🔍 Troubleshooting

### Common Issues

#### RSS Parser Issues:
- **Network Connectivity:** Ensure internet connection for RSS feed access
- **Invalid RSS URL:** Verify the RSS feed URL is accessible and valid
- **Parsing Errors:** Check RSS feed format compatibility

#### AWS SES Issues:
- **Authentication Errors:** Verify AWS credentials and region settings
- **Email Verification:** Ensure sender email is verified in AWS SES
- **Rate Limiting:** Check AWS SES sending limits and quotas
- **Sandbox Mode:** Production apps require sandbox removal

#### CSV Converter Issues:
- **File Path Errors:** Verify `REPO_NODEJS` environment variable is set correctly
- **Missing Input Files:** Ensure CSV files exist in `data_input/` directory
- **Permission Errors:** Check read/write permissions for input/output directories

### Debug Mode
Enable detailed logging by modifying the applications:

```javascript
// Add to any application for debugging
process.env.NODE_ENV = 'development';
console.log('Debug mode enabled');
```

---

## 📚 Additional Resources

### Documentation Links:
- [RSS Parser Library](https://www.npmjs.com/package/rss-parser)
- [AWS SES Documentation](https://docs.aws.amazon.com/ses/)
- [NodeMailer Documentation](https://nodemailer.com/)
- [PapaParse Documentation](https://www.papaparse.com/)

### Learning Resources:
- [Node.js Official Documentation](https://nodejs.org/docs/)
- [AWS SDK for JavaScript](https://docs.aws.amazon.com/sdk-for-javascript/)
- [CSV File Format Specification](https://tools.ietf.org/html/rfc4180)

---

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature-name`
3. **Commit changes:** `git commit -am 'Add feature'`
4. **Push to branch:** `git push origin feature-name`
5. **Submit a Pull Request**

### Code Style Guidelines:
- Use consistent indentation (2 spaces)
- Include error handling for all async operations
- Add comments for complex logic
- Follow Node.js best practices

---

## 📄 License

This project is licensed under the ISC License. See individual `package.json` files for specific licensing information.

---

## 📞 Support

For questions, issues, or contributions:
1. **Create an Issue:** Use GitHub issues for bug reports and feature requests
2. **Documentation:** Refer to this README for comprehensive usage information
3. **Code Examples:** Each project includes working examples and sample data

---

*Last Updated: July 2025*