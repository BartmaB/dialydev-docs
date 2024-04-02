---
sidebar_position: 2
---

# Authorization concept

- [Intro](#intro)
- [How to order a role in AccessIT](#how-to-order-a-role-in-accessit)
- [Naming convention](#naming-convention)
- [Roles Access Comparison](#roles-access-comparison)
  - [User Role](#user-role)
  - [Data Engineer Role](#data-engineer-role)
- [Resource Groups](#resource-groups)
- [ADLS Gen2](#adls-gen2)
- [Databricks](#databricks)
- [AML](#aml)
- [ADF](#adf)
- [SQL DB](#sql-db)
- [Azure DevOps](#azure-devops)
- [Key Vault](#key-vault)
- [Integration among Components](#integration-among-components)
  - [Azure Data Factory](#azure-data-factory)
  - [Databricks](#databricks-1)
  - [Azure Machine Learning](#azure-machine-learning)

## Intro

A DSP instance is a secured "batteries-included" environment that enables data scientists and data engineers to access and work on data ingested from and hosted on the Enterprise Data Lake.

In order to access such an environment, the end user needs to apply for and receive one of the following roles available in AccessIT :

### User Role

This role is meant for users who are not supposed to work actively on the data but still need access to the SQL DB where their colleagues with Data Engineer role store the results of their analysis. This could be useful when a dashboard on Power BI requires access to data that as result of some analysis is being stored on the SQL DB itself.

### Data Engineer Role

Inherits all permissions from User Role.

This role is meant to give access to Engineer users to the key components of the DSP. On average most of its users are data scientists, data engineers, SQL db experts, developers or others required to work on the data itself by creating analysis, ETL pipelines, data pre-processing, ML processes and so on.

### Security Role

# Data Science Platform

## AML

Members of the Data Engineer group have RBAC Contributor role on top of single Resource. This allows them to:

- See the resource and its resource group directly on the portal.
- Potentially delete the resource by themselves if they want to. All responsibility lies with them.

## ADF

Members of the Data Engineer group have RBAC Data Factory Contributor role on top of the whole DSP's Resource Group. This allows them to:

- See the single data factory and its resource group directly on the portal.
- Potentially delete any Data Factory within the resource group as well as creating additional Data Factories if so desired. Although this practice is NOT recommended.

To create ADF alerts the Security Role is required as it includes the Monitoring Contributor RBAC Role.

## SQL DB

The following page is focused on explaining the overall SQL access rights.

## Azure DevOps

The AAD Data Engineer group is granted restricted access to a common Devops project. This allows its members to:

- Have read access to a common wikipedia with user guidelines and best practices.
- Have access to a board and three repositories: Databricks, AML, ADF

As shown in the image below the data engineer group is granted membership to a team created within the Devops project itself.

The above team has restricted access to the Devops project as it can not access or modify any board or repos that doesn't belong to it. This allows different teams belonging to different DSP instances to be independent from each other.

## Key Vault

There are two Key Vaults in every DSP instance:

- Normal Key Vault - KV: Users have no direct access to the KV, however they can access its secrets indirectly through Databricks, ADF and AML. Mainly for SP and internal usage.
- User Key Vault - UKV: Key Vault for DSP users. Users with the EDL_labname_ SECURITY role have full managing access and responsibility over this Key Vault. The EDL_labname_ SECURITY role is managed by the DSP instance Owner. It is recommended to give the role to as few people as necessary. The responsibility for this Key Vault lies fully with the managing DSP instance team.

Remember: with great power comes great responsibility. The Data Science Platform contains powerful tools. What a user does or wants to achieve with these tools is up to them.

## Important

One of the new features of the Data Science Platform is having access to an Azure Devops project. Within this project there are three different Repositories, one for:

- Azure Machine Learning
- Databricks
- Azure Data Factory

The user-guidelines included with the DSP contain detailed instructions on how to link single resources to their respective repositories. In order to use these repositories it is necessary to order an Azure Devops License for free on Service Now.

It is highly recommended to use Git with the provided repositories, in order to secure the work of the development team. There is no alternative code-backup measures in place.

## Integration among Components

### Azure Data Factory

ADF leverages Azure Managed Identities to read and write into:

- SQLDB
- Common Datalake gen2
- Dedicated Datalake gen2

Additionally it has Contributor RBAC Role on top of:

- Databricks
- Azure Machine Learning

### Databricks

Databricks leverages a Service Principal in order to the be able to:

- Read from the common ADLS Gen2 through mounting points
- Read/write with the dedicated ADLS Gen2 through mounting points
- Read/write with the SQLDB

### Azure Machine Learning

Currently AML has some limitations when it comes to integration with other Azure Resources; for this reason different workarounds have been designed and described in the AML section of the DSP guidelines.

AML leverages a Service Principal in order to the be able to:

- Read from the common ADLS Gen2
- Read from the dedicated ADLS Gen2
