# Send Formatted Bluesky Post Action

This GitHub action publishes an automatically formatted Bluesky Post using the ATP protocol.

It is meant as a simple alternative that is reduced in options - automatically detecting links, tags, ... to form valid Bluesky posts.

## Inputs

### `status`

**Required** The content of the post to send.

### `bluesky-email`

**Required** The email address of the account to authenticate.

### `bluesky-password`

**Required** The password of the account to authenticate.

## Outputs

### `cid`

The CID of the created post.

### `uri`

The URI of the created post.

## Example Usage

The simplified usage looks like:

```yaml
uses: smapiot/send-bluesky-post-action@v1
with:
  status: 'Hi Mum!'
  bluesky-email: 'foo@bar.com'
  bluesky-password: 'abcDEF1234'
```

A complete example could thus look as follows:

```yaml
on:
  push:
    branches:
      - main

jobs:
  publish-pilet:
    name: Send Bluesky Post
    runs-on: [ubuntu-16.04]
    steps:
    - name: Post
      uses: smapiot/send-bluesky-post-action@v1
      with:
        status: 'Hi Mum!'
        bluesky-email: 'foo@bar.com'
        bluesky-password: 'abcDEF1234'
```
