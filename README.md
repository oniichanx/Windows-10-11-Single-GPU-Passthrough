# Windows 10/11 Single GPU Passthrough

Requirements
1. Your video card needs to support the UEFI. If it doesn't support, you can't do this.
2. Your operating system should be installed in UEFI mode.
3. Your processor needs to support virtualization.

# 1 - IOMMU Activation
We need to activate IOMMU technology to transfer devices from our main machine to the guest.
First of all, you need to activate IOMMU in the BIOS settings.
After  /etc/default/grubwe'll edit the file.
`GRUB_CMDLINE_LINUX_DEFAULT=` writing

for AMD  `amd_iommu=on iommu=pt`

For Intel  `intel_iommu=on iommu=pt`
we're adding the post.

For example, my setting file:
![bootloader](https://github.com/oniichanx/Windows-10-11-Single-GPU-Passthrough/blob/main/pic/image-39.png)

NOTE: NVIDIA part is not important. They were before.
Then
we need to update our GRUB settings by running the group update
command. Doing so is different from distribution to distribution.

Ubuntu/Mint/Debian `sudo update-grub`

Arch `sudo grub-mkconfig -o /boot/grub2/grub.cfg`

Fedora  `sudo grub2-mkconfig -o /boot/grub2/grub.cfg` with you can.

Please call the GRUB update command to differently.

If you're not using GRUB,
you're using systemd-boot `/boot/efi/loader/entries/` from the .conf extension file you will find your .conf extension

and enter the above commands in the options section, and then `sudo bootctl update`

you will run the command.

You need to restart your computer after these operations!

# 2 - IOMMU Groups
In this step we will look at the IOMMU group, which includes our video card.

If your video card is in which IOMMU group, you must add every item there to the virtual machine.

```
#!/bin/bash
shopt -s nullglob
for g in /sys/kernel/iommu_groups/*; do
    echo "IOMMU Group ${g##*/}:"
    for d in $g/devices/*; do
        echo -e "\t$(lspci -nns ${d##*/})"
    done;
done;
```

When you run this script, it will list all IOMMU groups.

IOMMU group with my video card:

```
IOMMU Group 12:  
  01:00.0 VGA compatible controller [0300]: NVIDIA Corporation GA104 [GeForce RTX 3060 Ti GDDR6X] [10de:24c9] (rev a1)  
  01:00.1 Audio device [0403]: NVIDIA Corporation GA104 High Definition Audio Controller [10de:228b] (rev a1)
```
